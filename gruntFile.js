// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    // configure less
    less: {
      build: {
        src: 'public/assets/less/*.less',
        dest: 'public/assets/css/style.css'
      }
    },

    jshint: {
      all: ['public/assets/js/*.js', 'public/components/**/*.js', 'app.routes.js', 'gruntFile.js']
    },

    // configure watch

    watch: {
      html: {
        files: ['index.html','public/components/**/*.html'],
        options: {
            livereload: true
        }
      },
      less: {
        files: ['public/assets/less/*.less'],
        tasks: ['less'],
        options: {
            livereload: true
        }
      },
      scripts: {
        files: ['public/**/*.js'],
        tasks: ['jshint']
      }
    },

  });

  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['less', 'nodemon']); 
  grunt.registerTask('w', ['watch']); 

};