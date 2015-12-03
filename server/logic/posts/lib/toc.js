'use strict';

var htmlparser = require('htmlparser2');
var marked = require('marked');

function addLinenos(lines, headers) {
  var current = 0, line;

  return headers.map(function (x) {
    for (var lineno = current; lineno < lines.length; lineno++) {
      line = lines[lineno];
      if (new RegExp(x.text[0]).test(line)) {
        current = lineno;
        x.line = lineno;
        x.name = x.text.join('');
        return x
      }
    }

    // in case we didn't find a matching line, which is odd,
    // we'll have to assume it's right on the next line
    x.line = ++current;
    x.name = x.text.join('');
    return x
  })
}

function rankify(headers, max) {
  return headers
    .map(function (x) {
      x.rank = parseInt(x.tag.slice(1), 10);
      return x;
    })
    .filter(function (x) {
      return x.rank <= max;
    })
}

function getHtmlHeaders(lines, maxHeaderNo) {
  var md = lines.join('\n');
  var headers = [], grabbing = null, text = [];

  var parser = new htmlparser.Parser({
    onopentag: function (name, attr) {
      if ((/h\d/).test(name)) {
        grabbing = name;
      }
    },
    ontext: function (text_) {
      if (!grabbing) return;
      text.push(text_);
    },
    onclosetag: function (name) {
      if (!grabbing) return;
      if (grabbing === name) {
        headers.push({ text: text, tag: grabbing });
        grabbing = null;
        text = [];
      }
    }
  },
  { decodeEntities: true })

  parser.write(md);
  parser.end();

  headers = addLinenos(lines, headers)
  // consider anything past h4 to small to warrant a link, may be made configurable in the future
  headers = rankify(headers, maxHeaderNo);
  return headers;
}


function anchor(header, repetition) {
  var headerHthml = marked(header+'\n==')
  var idAttr = headerHthml.split('"')[1]
  return `[${header}](#${idAttr})`;
};


////////////----------------------------------------------


function notNull(x) { return  x !== null; }

function addAnchor(header) {
  header.anchor = anchor(header.name, header.instance);
  return header;
}


function getHashedHeaders (lines) {
  var inCodeBlock = false
    , lineno = 0;

  // Turn all headers into '## xxx' even if they were '## xxx ##'
  function normalize(header) {
    return header.replace(/[ #]+$/, '');
  }

  // Find headers of the form '### xxxx xxx xx [###]'
  return lines
    .map(function (x, idx) {
      return { lineno: idx, line: x }
    })
    .filter(function (x) {
      if (x.line.match(/^```/)) {
        inCodeBlock = !inCodeBlock;
      }
      return !inCodeBlock;
    })
    .map(function (x) {
      var match = /^(\#{1,8})[ ]*(.+)\r?$/.exec(x.line);

      return match
        ? { rank :  match[1].length
          , name :  normalize(match[2])
          , line :  x.lineno
          }
        : null;
    })
    .filter(notNull)
}

function getUnderlinedHeaders (lines) {
    // Find headers of the form
    // h1       h2
    // ==       --

    return lines
      .map(function (line, index, lines_) {
        if (index === 0) return null;
        var rank;

        if (/^==+ *\r?$/.exec(line))      rank = 1;
        else if (/^--+ *\r?$/.exec(line)) rank = 2;
        else                              return null;

        return {
          rank  :  rank,
          name  :  lines_[index - 1],
          line  :  index - 1
        };
      })
      .filter(notNull)
}

function countHeaders (headers) {
  var instances = {};

  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    var name = header.name;

    if (instances.hasOwnProperty(name)) {
      instances[name]++;
    } else {
      instances[name] = 0;
    }

    header.instance = instances[name];
  }

  return headers;
}



module.exports = (DAL, Data, Shared, Lib) =>

function(content, maxHeaderNo) {
  var maxHeaderNo = maxHeaderNo || 4;

  // $log('transform.content', content)

  var lines = content.split('\n')

  var headers = getHashedHeaders(lines)
    .concat(getUnderlinedHeaders(lines))
    // .concat(getHtmlHeaders(lines, maxHeaderNo)) // stop rending heading inside code examples

  headers.sort(function (a, b) {
    return a.line - b.line;
  });

  var allHeaders    =  countHeaders(headers)
    , lowestRank    =  _(allHeaders).chain().pluck('rank').min().value()
    , linkedHeaders =  _(allHeaders).map(addAnchor.bind(null));

  if (linkedHeaders.length === 0) return { transformed: false };

  var toc = '\n\n'
    + linkedHeaders
        .map(function (x) {
          var indent = _(_.range(x.rank - lowestRank))
            .reduce(function (acc, x) { return acc + '  '; }, '');

          return indent + '- ' + x.anchor;
        })
        .join('\n')
    + '\n';

  return toc
}
