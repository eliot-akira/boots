
// Define configuration here
var config = {
  assets: {
    name: 'boots',
    folder: 'assets',
    js: true,
    css: {
      sass : true
    }
  }
};

// Load defaults
config = require('./gulp/defaults')( config );

// Load tasks
[ 'default', 'css', 'js', 'watch' ].forEach(function(task) {
  require('./gulp/tasks/'+task)( config );
});
