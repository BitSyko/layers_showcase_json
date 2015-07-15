module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            json: {
                src: ['src/*.json'],
                dest: 'dest/showcase.json',
                options: {
                    banner: '/*\nAuto Generated Layers Showcase Json - Author: <%= pkg.author %>\nLast Update <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT Z") %>\n*/\n{\n    "Themes": [\n',
                    footer: "\n    ]\n}\n",
                    separator: ',\n'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};