module.exports = function(grunt){
	grunt.initConfig({
		uglify : {
			my_target : {
				files : {
					'dest/output.min.js' : ['src/input1.js','src/input2.js']
				}
			}
		}
	});
};



module.exports = function(grunt){
	grunt.initConfig({
		uglify : {
			options : {
				mangle : false
			},
			my_target : {
				files : {
					'dest/output.min.js' : ['src/input.js']
				}
			}
		}
	});
}

module.exports = function(grunt){
	grunt.initConfig({
		uglify : {
			options : {
				mangle : ['jQuery','Backbone']
			},
			my_target : {
				files : {
					'dest/output.min.js' : ['src/input.js']
				}
			}
		}
	});
};

module.exports = function(grunt){
	grunt.initConfig({
		uglify : {
			my_target : {
				options : {
					sourceMap : true,
					sourceMapName : 'path/to/sourcemap.map'
				},
				files : {
					'dest/output.min.js' : ['src/input.js']
				}
			}
		}
	});
}
