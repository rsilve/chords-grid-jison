'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jison: {
		grid_commonjs : {
			options: { moduleType : 'commonjs' },
			files : {
				'target/grid-commonjs.js' : 'src/grid.jison'
			}
		},
		grid_amd : {
			options: { moduleType : 'amd' },
			files : {
				'target/grid-amd.js' : 'src/grid.jison'
			}
		}
    },
    nodeunit: {
      tests: ['test/*_test.js'],
    },
    watch: {
      parser: {
        files: ['*.jison'],
        tasks: ['jison']
      }
    },
    clean: ["target"]	
  });
  
	
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-jison');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
 

  grunt.registerTask('live', ['regarde']);
  grunt.registerTask('test', ['nodeunit']);
  
  // Default task(s).
  grunt.registerTask('default', ['jison']);

};