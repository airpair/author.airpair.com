var shared = {


  validSlug(slug) {
    return /^[a-z0-9]+([a-z0-9\-\.]+)*$/.test(slug)
  },


  wordcount(md, mod) {
    var words = md.match(/\w+/g)
    words = words.filter(word => word.length>1)
    var count = words.length
    return mod ? count-(count%mod) : count
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
  }


}


module.exports = shared
