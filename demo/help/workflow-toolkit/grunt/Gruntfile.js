module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json');
		uglify : {
			options : {

			},
			build : {
				src : '',
				dest : ''
			}
		}
	});
}