'use strict'

module.exports = function (grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: ['temp/jquery.min.js', 'temp/bootstrap.min.js', 'temp/knockout.min.js', 'temp/app.min.js'],
        dest: 'build/combined.min.js'
      },
      css: {
        src: ['temp/bootstrap.min.css', 'temp/style.min.css'],
        dest: 'build/combined.min.css'
      }
    },
    cssmin: {
      css: {
        files: {
          'temp/style.min.css': ['css/style.css'],
          'temp/bootstrap.min.css': ['css/bootstrap.css']
        }
      }
    },
    uglify: {
      js: {
        files: {
          'temp/jquery.min.js': ['js/jquery.js'],
          'temp/bootstrap.min.js': ['js/bootstrap.js'],
          'temp/app.min.js': ['js/app.js'],
          'temp/knockout.min.js': ['js/knockout.min.js']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', '> 1%']
      },
      no_dest: {
        src: 'temp/style.min.css'
      }
    },
    uncss: {
      options: {
        stylesheets: ['css/bootstrap.css', 'css/style.css']
      },
      dist: {
        files: {
          'temp/combined.css': ['index.html']
        }
      }
    },
    clean: {
      build: ['build/*','!build/combined.min.js', '!build/combined.min.css']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register default tasks
  grunt.registerTask('default', ['newer:uglify:js', 'newer:concat:js',
                                 'newer:cssmin', 'newer:concat:css']);
}