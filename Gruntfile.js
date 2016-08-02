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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('dist', ['clean:dist', 'concat:js', 'concat:css']);
};
