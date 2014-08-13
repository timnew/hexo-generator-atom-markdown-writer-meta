(function() {
  var fileUtil, generateCategoriesJson, generatePostsJson, generateTagsJson, pathUtil;

  pathUtil = require('path');

  fileUtil = hexo.util.file2;

  generatePostsJson = function(posts) {
    var postsMeta;
    postsMeta = {
      posts: posts.map(function(post) {
        return {
          title: post.title,
          url: encodeURI(post.permalink),
          date: post.updated.toDate().toISOString() || post.date.toDate().toISOString()
        };
      })
    };
    return hexo.route.set('posts.json', JSON.stringify(postsMeta));
  };

  generateCategoriesJson = function(categories) {
    var categoriesMeta;
    categoriesMeta = {
      categories: categories.map(function(category) {
        return category.name;
      })
    };
    return hexo.route.set('categories.json', JSON.stringify(categoriesMeta));
  };

  generateTagsJson = function(tags) {
    var tagsMeta;
    tagsMeta = {
      tags: tags.map(function(tag) {
        return tag.name;
      })
    };
    return hexo.route.set('tags.json', JSON.stringify(tagsMeta));
  };

  module.exports = function(locals, render, callback) {
    generatePostsJson(locals.posts.toArray());
    generateCategoriesJson(locals.categories.toArray());
    generateTagsJson(locals.tags.toArray());
    return callback();
  };

}).call(this);
