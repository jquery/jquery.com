module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-clean" );
grunt.loadNpmTasks( "grunt-html" );
grunt.loadNpmTasks( "grunt-wordpress" );

grunt.initConfig({
	clean: {
		folder: "dist/"
	},
	htmllint: {
		page: "page/*.html"
	},
	jshint: {
		options: {
			undef: true,
			node: true
		}
	},
	lint: {
		grunt: "grunt.js"
	},
	watch: {
		pages: {
			files: "page/*.html",
			tasks: "deploy"
		}
	},
	wordpress: grunt.utils._.extend({
		dir: "dist/wordpress"
	}, grunt.file.readJSON( "config.json" ) )
});

var // modules
	path = require( "path" ),
	pygmentize = require( "pygmentize" ),

	// files
	resourceFiles = grunt.file.expandFiles( "resources/*" ),
	distDir = grunt.config( "wordpress.dir" ) + "/posts/page";

function htmlEscape(text) {
   return text.replace(/&/g,'&amp;').
     replace(/</g, '&lt;').
     replace(/>/g, '&gt;').
     replace(/"/g, '&quot;').
     replace(/'/g, '&#039;');
}

grunt.registerTask( "build-pages", function() {
	grunt.file.mkdir( distDir );
	grunt.file.expand( "page/**.html" ).forEach(function( file ) {
		grunt.file.copy( file, distDir + "/" + path.basename( file ), {
			process: function( content ) {
				return content.replace(/@partial\((.+)\)/g, function(match, input) {
					return htmlEscape( grunt.file.read( input ) );
				});
			}
		});
	});
});

grunt.registerTask( "build-pygmentize", function() {
	grunt.utils.async.forEachSeries( grunt.file.expand( distDir + "/**.html" ), function( fileName, fileDone )  {
		grunt.verbose.write( "Pygmentizing " + fileName + "..." );
		pygmentize.file( fileName, function( error, data ) {
			if ( error ) {
				grunt.verbose.error();
				grunt.log.error( error );
				fileDone();
				return;
			}
			grunt.verbose.ok();
			grunt.file.write( fileName, data );
			fileDone();
		});
	}, this.async());
});

grunt.registerTask( "build-resources", function() {
	var task = this,
		taskDone = task.async(),
		targetDir = grunt.config( "wordpress.dir" ) + "/resources/";

	grunt.file.mkdir( targetDir );

	grunt.utils.async.forEachSeries( resourceFiles, function( fileName, fileDone )  {
		grunt.file.copy( fileName, targetDir + path.basename( fileName ) );
		fileDone();
	}, function() {
		if ( task.errorCount ) {
			grunt.warn( "Task \"" + task.name + "\" failed." );
			taskDone();
			return;
		}
		grunt.log.writeln( "Built " + resourceFiles.length + " resources." );
		taskDone();
	});
});

grunt.registerTask( "default", "lint" );
grunt.registerTask( "build-wordpress", "clean lint build-pages build-pygmentize build-resources");
grunt.registerTask( "deploy", "wordpress-deploy" );

};
