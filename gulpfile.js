
var config = {
  assets: {
    name: 'boots',
    src: 'src',
    dest: 'dist',
    js: true,
    css: true
  },
  browserSync: {
    server: './'
  }
};

require('./gulp/launch')( config );
