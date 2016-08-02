//jshint strict: false
var fs = require('fs');
var glob = require('glob');

function concat(options) {
    var fileList = options.src;
    var distPath = options.dest;

    fileList = fileList.map(function(path) {
      return glob.sync(path);
    });

    fileList = Array.prototype.concat.apply([], fileList);

    console.log(fileList);

    var output = fileList.map(function(filePath) {
        return fs.readFileSync(filePath).toString();
    });
    fs.writeFileSync(distPath, output.join('\n'));
}

// Concat JS files
concat({
    src: [
        'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-jwt/dist/angular-jwt.js',
        'app/app.module.js',
        'app/configuration/env.js',
        'app/app.config.js',
        'app/{components,directives,layout,services}/**/*module.js',
        'app/{components,directives,layout,services}/**/!(*.module).js'
    ],
    dest: 'app/dist/build.js'
});

// Concat CSS files
concat({
    src: [
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/html5-boilerplate/dist/css/normalize.css',
        'bower_components/html5-boilerplate/dist/css/main.css',
        'app/app.css'
    ],
    dest: 'app/dist/build.css'
});
