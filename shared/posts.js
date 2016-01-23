

var shared = {

  status({submitted,published}) {
    if (!submitted && !published)
      return "draft"
    if (submitted && !published)
      return "submitted"
    if (published)
      return "published"
  },

  url(post) {
    return _.get(post,'htmlHead.canonical') ||
      (post.submitted ? `https://www.airpair.com/posts/review/${post._id}`
                      : `/editor/${post._id}`)
  },


  validSlug(slug) {
    return /^[a-z0-9]+([a-z0-9\-\.]+)*$/.test(slug)
  },


  defaultSlug(post) {
    var slug = post.title
               .toLowerCase()
               .replace(/ /g, '_')
               .replace(/\W+/g, '')
               .replace(/_/g, '-')


    return (slug.length > 40 ? slug.substring(0,40) : slug)
               .replace(/-$/,'')
  },


  previewable(post) {
    return post.tags.length > 0 &&
           post.assetUrl
  },


  todo(post) {
    if (post.tags.length == 0) return 'tag'
    if (!post.assetUrl) return 'asset'
    if (!post.stats.words ||
      post.stats.words < 400) return 'wordcount'
    if (!post.submitted) return 'submit'
    if (post.reviews.length < 3) return 'reviews'
    if (post.stats.rating < 3.5) return 'rating'
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
  },


  markupReferences(references, marked) {
    return _.map(_.keys(references), idx =>
      `<cite id="r${idx}">${idx}. ${marked(references[idx])}</cite>`.replace(/<\/?p>/g,''))
  },


  getPreview(post, marked) {
    var preview = shared.extractReferences(post.md)
    preview.title = post.title
    preview.body = marked(post.md)
    // preview.wordcount = shared.wordcount(md)
    if (preview.references)
      preview.markedUpReferences = shared.markupReferences(preview.references, marked)

    return preview
  }


}


module.exports = shared
