module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			options : {
				stripBanner : true,
				banner : '//hello I am Pelli\n'
			},
			build : {
				src : 'src/*.js',
				dest : 'dist/<%=pkg.name%>.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default',['uglify']);
}