---
path: completely-new-post
date: 2021-02-04T18:24:55.806Z
modifiedDate: 2021-02-04T18:08:55.806Z
title: О новый пост, новый пост..
tags: ['animals']
---

## Creating tag pages for your blog post is a way to let visitors browse related content.

To add tags to your blog posts, you will first want to have your site set up to turn your markdown pages into blog posts. To get your blog pages set up, see the tutorial on Gatsby’s data layer and Adding Markdown Pages.

The process will essentially look like this:

- Add tags to your markdown files
- Write a query to get all tags for your posts
- Make a tags page template (for /tags/{tag})
- Modify gatsby-node.js to render pages using that template
- Make a tags index page (/tags) that renders a list of all tags
- (optional) Render tags inline with your blog posts
