//jshint strict: false
module.exports = function(grunt) {

  grunt.initConfig({
    buildConfig: grunt.file.readJSON('build.conf.json'),

    clean: {
      dist: {
        src: 'app/dist/'
      }
    },

    concat: {
      js: {
        src: '<%= buildConfig.js.src %>',
        dest: '<%= buildConfig.js.dest %>'
      },
      css: {
        src: '<%= buildConfig.css.src %>',
        dest: '<%= buildConfig.css.dest %>'
      }
    },

    watch: {
      options: {
        debounceDelay: 1500
      },
      js: {
        files: ['app/**/*.js', '!app/dist/**/*'],
        tasks: ['concat:js']
      },
      css: {
        files: ['app/**/*.css', '!app/dist/**/*'],
        tasks: ['concat:css']
      },
      livereload: {
        options: {
            livereload: true
        },
        files: ['app/dist/**/*']
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          protocol: 'http',
          hostname: '127.0.0.1',
          base: 'app',
          open: true,
          keepalive: true,
          livereload: true
        }
      }
    }

  });

  // Load plugin tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Custom tasks
  grunt.registerTask('dist', ['clean:dist', 'concat:js', 'concat:css']);
  grunt.registerTask('run', ['dist', 'watch']);

  // Default task run with "grunt"
  grunt.registerTask('default', ['run']);
};
