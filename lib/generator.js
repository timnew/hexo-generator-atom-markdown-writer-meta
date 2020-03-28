function generator(locals) {
  var comparer, extractName, fileUtil, generateCategoriesJson, generatePostsJson, generateTagsJson, pathUtil;

  pathUtil = require('path');

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

    return {
        path: 'posts.json',
        data: JSON.stringify(postsMeta)
    };
  };

  comparer = function(a, b) {
    return b.length - a.length;
  };

  extractName = function(obj) {
    return obj.name;
  };

  generateCategoriesJson = function(categories) {
    var categoriesMeta;
    categoriesMeta = {
      categories: categories.sort(comparer).map(extractName)
    };

    return {
        path: 'categories.json',
        data: JSON.stringify(categoriesMeta)
    };
  };

  generateTagsJson = function(tags) {
    var tagsMeta;
    tagsMeta = {
      tags: tags.sort(comparer).map(extractName)
    };

    return {
        path: 'tags.json',
        data: JSON.stringify(tagsMeta)
    };
  };

  var jsons = new Array();
  jsons.push(generatePostsJson(locals.posts.toArray()));
  jsons.push(generateCategoriesJson(locals.categories.toArray()));
  jsons.push(generateTagsJson(locals.tags.toArray()));

  return jsons;
}


module.exports = generator;
