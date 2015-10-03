
var config = {
  assets: {
    name: 'boots',
    src: 'src',
    js: {
      dest: 'dist'
    },
    css: {
      dest: 'dist'
    }
  },
  browserSync: {
    server: './'
  }
};

require('./gulp/launch')( config );
