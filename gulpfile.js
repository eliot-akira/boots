
// Define configuration here
var config = {
  assets: {
    name: 'boots',
    src: 'src',
    dest: 'public',
    css: true,
    js: true
  },
  browserSync: {
    server: './public'
  }
};

require('./gulp/launch')( config );
