pathUtil = require('path')
fileUtil = hexo.util.file2

generatePostsJson = (posts) ->
  postsMeta =
    posts: posts.map (post) ->
      {
        title: post.title
        url: encodeURI(post.permalink)
        date: post.updated.toDate().toISOString() || post.date.toDate().toISOString()
      }

  hexo.route.set('posts.json', JSON.stringify(postsMeta))

generateCategoriesJson = (categories) ->
  categoriesMeta =
    categories: categories.map (category) ->
      category.name

  hexo.route.set('categories.json', JSON.stringify(categoriesMeta))

generateTagsJson = (tags) ->
  tagsMeta =
    tags: tags.map (tag) ->
      tag.name

  hexo.route.set('tags.json', JSON.stringify(tagsMeta))

module.exports = (locals, render, callback) ->

  generatePostsJson locals.posts.toArray()
  generateCategoriesJson locals.categories.toArray()
  generateTagsJson locals.tags.toArray()

  callback()
