module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['app/scripts/*.js',
                    'app/scripts/**/*.js'],
                dest: 'app/dist/scripts/script.js'
            }
        },
        uglify: {
               dist: {
                   files: {
                       'app/dist/scripts/script.min.js': ['app/dist/scripts/script.js']
                   }
               }
            },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/styles/',
                    src: ['*.scss'],
                    dest: 'app/dist/styles/',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/dist/styles/main.min.css': ['app/dist/styles/app.css']
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);
};