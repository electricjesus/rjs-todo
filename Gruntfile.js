module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      target: {
        rjsConfig: 'scripts/app.js',
        options: {
          exclude: ['requirejs'],
          baseUrl: './',
          transitive: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: '.'
        }
      }
    },

    sass: {
      options: {
        includePaths: [
          'bower_components/foundation/scss',
          'bower_components/RRSSB/scss'
        ]
      },
      dist: {
        options:  { outputStyle: 'compressed', errLogToConsole: true },
        files:    { 'dist/app.css': 'scss/app.scss' }        
      },
      dev: {                              
        options: {
          sourceMap: true, sourceComments: 'map', errLogToConsole: true
        },
        files: {
            'dist/app.css': 'scss/app.scss'
        }
      }
    },

    jshint:  {
  	  beforeconcat: ['scripts/**/*.js'],
    	options: {
    		"lastsemic" : true,
    		"globals": { jQuery: true, console: true, Handlebars: true, "_" : true }
    	}
    },

    concat: {
      options: {
        separator: ';',
        sourceMap: true
      },    
      dist: {
        src: [
          'scripts/**/*.js'
        ],
        dest: 'dist/app.js'
      }
    },


    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        sourceMapIn: 'dist/app.js.map'
      },      
      dist: {
        files: {
          'dist/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    exec: {
      clean: { command: 'rm -rf *', cwd : 'dist' },
      tests: { 
        command: 'jasmine-node --verbose --autotest *.spec.js',
        cwd: 'tests'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      javascripts: {
        files: 'scripts/**/*.js',
        tasks: ['jshint:beforeconcat','concat','uglify'],
        options: {
          livereload: true
        }
      },
      dist : {
        files: ['js/**/*.js','dist/**/*.js','dist/**/*.css','index.html'],
        options: {
          livereload: true
        }
      },
      handlebars: {
        files: 'handlebars/**/*.handlebars',
        tasks: ['exec:handlebars','concat','uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('package', ['exec:clean','sass:dist','jshint:beforeconcat','concat','uglify']);
  grunt.registerTask('build',   ['exec:clean','sass:dev','jshint:beforeconcat','concat','uglify']);
  grunt.registerTask('default', ['build','server','watch']);

}
