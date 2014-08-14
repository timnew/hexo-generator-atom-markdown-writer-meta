hexo-generator-atom-markdown-writer-meta [![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]
========================================

> A [Hexo][hexo-url] generator that produces meta json files required by the [Atom][atom-url] [Markdown-Writer][markdown-writer-url]
> It generates `posts.json`, `categories.json` and `tags.json` under the root site.

## Install

Install using [npm][npm-url].

    $ npm install hexo-generator-atom-markdown-writer-meta --save

## Markdown-Writer Configuration for Hexo

Field          | Sample Value
---------------|----
File Extension | .md
Site Draft Dir | source/_drafts
Site Local Dir | /Users/timnew/Workspace/blogs/timnew
Site Posts Dir | source/_posts
Url for Categories | http://timnew.github.io/categories.json
Url for Posts      | http://timnew.github.io/posts.json
Url for Tags       | http://timnew.github.io/tags.json

## Files

* `posts.json`: Json file contains name, url and last update time for each post
* `tags.json`: Json file contains the tags that used in the blog, sorted by occurrence
* `cateogories.json`: Json file contains the categories that used in the blog, sorted by occurrence

## Related Tools

* [ATOM Editor][atom-url]
* [Markdown-Writer][markdown-writer-url]
* [Hexo][hexo-url]

## License
MIT

[![NPM downloads][npm-downloads]][npm-url]

[homepage]: https://github.com/timnew/hexo-generator-atom-markdown-writer-meta

[npm-url]: https://npmjs.org/package/hexo-generator-atom-markdown-writer-meta
[npm-image]: http://img.shields.io/npm/v/hexo-generator-atom-markdown-writer-meta.svg?style=flat
[npm-downloads]: http://img.shields.io/npm/dm/hexo-generator-atom-markdown-writer-meta.svg?style=flat

[depstat-url]: https://gemnasium.com/timnew/hexo-generator-atom-markdown-writer-meta
[depstat-image]: http://img.shields.io/gemnasium/timnew/hexo-generator-atom-markdown-writer-meta

[atom-url]: https://atom.io/
[markdown-writer-url]: https://github.com/zhuochun/md-writer
[hexo-url]: http://hexo.io/
