var data = {
  examplePostImage: `https//www.airpair.com/static/img/css/blog/example2.jpg`,
  examplePostYouTube: `http://youtu.be/qlOAbrvjMBo`,
  defaultPostMarkdown: `## AirPair Editor Tips

As you type you'll see the preview pane update. The longer your posts gets, the less frequently it will refresh. To show the latest content immediately, click anywhere (*i.e. blur*) out of the editor.

Note that you still need to click **SAVE** to save your work. If the **SAVE** button is disabled, it means your Markdown is saved.

## Handy Markdown snippets

### Links and Images

Links are easy! Here's link back to [Your post contributions](/posts/me). Here's an absolute link to the [AirPair posts section with a title attribute](https://airpair.com/posts "AirPair Posts"). Images are similar to links, but with a ! infront:

![AirPair Logo](/static/img/css/airpair-author.png)

### Headings

## Use h2 for headings

- h1 is already taken by your post's title, so don't use single # h1 headings

### h3 are good for sub-headings

Together H1s and H2s will appear automatically in your Table of contents. You'll be able to see them later when you click **PREVIEW**.

## Code blocks

Code blocks are the same as github flavored fenced code blocks. You can

\`\`\`
No language specified
\`\`\`

\`\`\`coffeescript
#Code blocks with language
\`\`\`

\`\`\`coffeescript,linenums=true
#Code blocks with language and linenums
() ->
  coolness = true
\`\`\`

\`\`\`javascript,linenums=true
//Code blocks for javascript
function() {
  var coolness = true
}
\`\`\`

## Special characters

\* Note to use reserved Markdown characters escape them with a backslash

`

}




angular.module('Author.Services.StaticData', [])
       .service('StaticData', () => data)


