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
        files: ['!app/dist/*', 'app/**/*.js'],
        tasks: ['concat:js']
      },
      css: {
        files: ['!app/dist/*', 'app/**/*.css'],
        tasks: ['concat:css']
      }
    }

  });

  // Load plugin tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Custom tasks
  grunt.registerTask('dist', ['clean:dist', 'concat:js', 'concat:css']);
  grunt.registerTask('run', ['dist', 'watch']);

  // Default task run with "grunt"
  grunt.registerTask('default', ['run']);
};
