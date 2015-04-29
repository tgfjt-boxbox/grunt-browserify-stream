var fs = require('vinyl-fs');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  grunt.registerTask('browserify', function() {
    browserify('./src/js/main.js')
      .bundle()
      .pipe(source('main.js'))
      .pipe(fs.dest('./build'))
      .on('end', this.async())
  });

  grunt.registerTask('default', ['browserify']);
};
