module.exports = function (grunt) {
    //http://gruntjs.com/plugins
    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });

    grunt.initConfig({
        jshint: {
            options: {
            },
            jshint_checking: {
                src: ['src/js/controllers/*.js']//'src/js/components/*.js',
            }
        },
        clean: {
            dev: [
                'src/js_temporary/components/',
                'src/js_temporary/libs/',
                'client/css/']
        },
        react: {
            dev: {
                files: {
                    'src/js_temporary/components/table.js': ['src/js/components/table.jsx']
                }
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/* project naruto game */'
            },
            controllers: {
                src: ['src/js/controllers/*.js'],
                dest: 'client/js/script.js'
            },
            components: {
                src: ['src/js_temporary/components/*.js'],
                dest: 'client/js/components.js'
            }
            /*libs: {
                src: 'node_modules/react/dist/*.js',
                dest: 'client/js/test/*.js'
            }*/
        },
        uglify: {
            options: {
                stripBanners: true,
                banner: '/* project naruto game */'
            },
            build: {
                src: 'client/js/script.js',
                dest: 'client/js/script.js'
            }
        },
        sass: {//sass --watch src/sass/style.scss:client/css/style.css
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'client/css/style.min.css': 'src/sass/style.scss'
                }
            },
            prod: {
                files: {
                    'client/css/style.css': 'src/sass/style.scss'
                }
            }
        },
        cssmin: {
            dev: {
                options: {
                    //stripBanners: true,
                    banner: '/* project naruto game css */'
                },
                files: {
                    'client/css/style.min.css': ['client/css/style.css']
                }
            }
        },
        watch: {
            dev: {
                files: ['src/js/*/*.js', 'src/sass/*.sass'],
                tasks: ['jshint', 'react', 'concat', 'sass:dev']
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'jshint', 'react', 'concat', 'uglify', 'sass:prod', 'cssmin:dev']);//, 'watch'
    grunt.registerTask('dev', ['clean', 'jshint', 'react', 'concat', 'sass:dev']);

};