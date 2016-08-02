//jshint strict: false
module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      dist: {
        src: 'app/dist/'
      }
    },

    concat: {
      js: {
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
      },
      css: {
        src: [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/html5-boilerplate/dist/css/normalize.css',
            'bower_components/html5-boilerplate/dist/css/main.css',
            'app/app.css',
            'app/{components,directives,layout,services}/**/*.css'
        ],
        dest: 'app/dist/build.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('dist', ['clean:dist', 'concat:js', 'concat:css']);
};
