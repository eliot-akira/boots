
var config = {
  assets: {
    name: 'boots',
    src: 'src',
    dest: 'build',
    js: true,
    css: true
  },
  browserSync: {
    server: './'
  }
};

require('./gulp/launch')( config );
