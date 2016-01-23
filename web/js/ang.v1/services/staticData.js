var viewMode = {
  'mobile-portrait': 320,
  'mobile-landscape': 400,
  'tablet-portrait': 640,
  // 'tablet-landscape')">TL</a> |
  'desktop-small': 900,
  'desktop-large': 1200,
  'desktop-xl': 1600,
}

var data = {
  viewMode,
  examplePostImage: `https://static.airpair.com/img/author/example2.jpg`,
  defaultPostMarkdown: `Welcome to your new post

> Below is a collection of example markdown to quickly format professional looking posts. It's good practice to start every posts with a short inside this/a blockquote up to top of about this length (30-50 words)

## 1. AirPair Editor Tips

### 1.1 The preview pane

As you type the preview pane will update.

The longer your post, the less frequently it will refresh. To immediately show the latest changes, click anywhere - *i.e. blur* - out of the editor.

### 1.2 Change, Check, Save

When you make changes, the **SAVE** button appears.

Preview how things look across different devices and if all's well, click **SAVE** to avoid loosing work.

### 1.3 Guideline cues

You will notice guidelines marked by css automatically in a different color.
For examples posts should start with a short summary contained inside a
blockquote. If you haven't yet, reomve the first sentence and what it red go away.

# Don't use `h1` in your markdown

## 2. Handy Markdown snippets

### 2.1 Links, Horizonal Rule and Images

Links are easy! Here's link back to [Your post contributions](/posts/me). Here's an absolute link to the [AirPair posts section with a title attribute](https://airpair.com/posts "AirPair Posts").

Images are similar to links, but with a ! infront. Always use https for image links:

- - -

![AirPair Logo](https://static.airpair.com/img/header/logo.png)

### 2.2 Headings

#### Use h2 for headings

- h1 is already taken by your post's title, so don't use single # h1 headings

#### h3 are good for sub-headings

Together H1s and H2s will appear automatically in your Table of contents. You'll be able to see them later when you click **PREVIEW**.

### 2.3 Code blocks

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

### 2.4 Special characters

## 3. Guidelines

\* Note to use reserved Markdown characters escape them with a backslash

### 3.1 References

Use the <sup></sup> tag to credit references

`

}




angular.module('Author.Services.StaticData', [])
       .service('StaticData', () => data)


