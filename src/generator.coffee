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

comparer = (a, b) ->
  b.length - a.length

extractName = (obj) ->
  obj.name

generateCategoriesJson = (categories) ->
  categoriesMeta =
    categories: categories.sort(comparer).map(extractName)

  hexo.route.set('categories.json', JSON.stringify(categoriesMeta))

generateTagsJson = (tags) ->
  tagsMeta =
    tags: tags.sort(comparer).map(extractName)

  hexo.route.set('tags.json', JSON.stringify(tagsMeta))

module.exports = (locals, render, callback) ->

  generatePostsJson locals.posts.toArray()
  generateCategoriesJson locals.categories.toArray()
  generateTagsJson locals.tags.toArray()

  callback()
