var rimraf = require( "rimraf" );

module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-check-modules" );
grunt.loadNpmTasks( "grunt-jquery-content" );
grunt.loadNpmTasks( "grunt-wordpress" );

grunt.initConfig({
	"build-pages": {
		all: grunt.file.expandFiles( "pages/**" )
	},
	"build-resources": {
		all: grunt.file.expandFiles( "resources/*" )
	},
	wordpress: grunt.utils._.extend({
		dir: "dist/wordpress"
	}, grunt.file.readJSON( "config.json" ) )
});

grunt.registerTask( "clean", function() {
	rimraf.sync( "dist" );
});

grunt.registerTask( "build-member-list", function() {
	var https = require( "https" ),
		done = this.async(),
		path = grunt.config( "wordpress.dir" ) + "/resources/corporate-members.json";

	function getMembers( level, callback ) {
		var request = https.request({
			host: "raw.githubusercontent.com",
			path: "/jquery/jquery.org/master/data/members/" + level + ".json"
		}, function ( response ) {
			var json = "";
			response.setEncoding( "utf8" );
			response.on( "data", function( chunk ) {
				json += chunk;
			});
			response.on( "end", function() {
				try {
					json = JSON.parse( json );
				} catch( error ) {
					return callback( error );
				}

				callback( null, json );
			});
		});

		request.end();
	}

	grunt.utils.async.parallel({
		founding: getMembers.bind( null, "founding" ),
		platinum: getMembers.bind( null, "platinum" ),
		gold: getMembers.bind( null, "gold" )
	}, function( error, members ) {
		if ( error ) {
			grunt.log.error( error );
			return done( false );
		}

		var corporateMembers = members.founding
			.concat( members.platinum )
			.concat( members.gold )
			.filter(function( member ) {

				// modern.IE has a special membership which doesn't get logo rotation
				if ( member.name === "modern.IE" ) {
					return false;
				}

				return true;
			});

		corporateMembers = JSON.stringify( corporateMembers );
		grunt.file.write( path, corporateMembers );
		done();
	});
});

grunt.registerTask( "build", "build-pages build-resources build-member-list" );
grunt.registerTask( "build-wordpress", "check-modules clean build" );

};
