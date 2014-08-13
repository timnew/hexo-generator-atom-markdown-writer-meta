var generator = hexo.extend.generator;

if (generator.register.length === 1){
  generator.register(require('./lib/generator'));
} else {
  generator.register('atom-markdown-writer-meta', require('./lib/generator'));
}
