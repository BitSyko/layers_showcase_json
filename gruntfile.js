module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            json: {
                src: ['src/*.json'],
                dest: 'dest/showcase.json',
                options: {
                    banner: '{\n"Info" : "Auto Generated Layers Showcase Json - Author: <%= pkg.author %> Last Update <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT Z") %>",\n "Themes": [\n',
                    footer: "\n    ]\n}\n",
                    separator: ',\n'
                }
            }
        },
        'json-minify': {
            build: {
                files: 'dest/showcase.json'
            }
        }
    });

    grunt.registerTask('test', 'test if showcase.json is valid json file', function() {

        var json;
        var jsonString = grunt.file.read('dest/showcase.json');

        try {
            json = JSON.parse(jsonString);
        } catch (exception) {
            json = null;
            grunt.fail.fatal("File is not json file", 1);
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-json-minify');

    grunt.registerTask('default', ['concat', 'json-minify', 'test']);
};