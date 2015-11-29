var shared = {

  wordcount(md) {
    var s = md.replace(/(^\s*)|(\s*$)/gi,"");
    s = s.replace(/[ ]{2,}/gi," ");
    s = s.replace(/\n /,"\n");
    return s.split(' ').length;
  },


  extractReferences(markdown, patterns) {
    var references = []
    var matcher = patterns ? patterns.matcher : /<sup>(.*?)<\/sup>/g
    var matches = markdown.match(matcher)

    if (!matches)
      return {markdown,references}

    var count = 0
    references = {}

    var md = markdown
    matches.forEach(sup => {
      var extracter = patterns ? patterns.extracter : /<\/?sup>/g
      var ref = sup.replace(extracter,'')
      var reused = references[parseInt(ref)]

      // allows to reuse previous references
      if (!reused) {
        references[++count] = ref
        markdown = markdown.replace(sup,
          `<sup>[<a href="#r${count}">${count}</a>]</sup>`)
      } else {
        markdown = markdown.replace(sup,
          `<sup>[<a href="#r${count}">${ref}</a>]</sup>`)
      }
    })

    return { markdown, references }
  }

}


module.exports = shared
