var async = require( "async" );

module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-jquery-content" );

grunt.initConfig({
	"build-posts": {
		page: "pages/**"
	},
	"build-resources": {
		all: "resources/**"
	},
	wordpress: (function() {
		var config = require( "./config" );
		config.dir = "dist/wordpress";
		return config;
	})()
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

	async.parallel({
		founding: getMembers.bind( null, "founding" ),
		platinum: getMembers.bind( null, "platinum" ),
		gold: getMembers.bind( null, "gold" )
	}, function( error, members ) {
		if ( error ) {
			return done( error );
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

grunt.registerTask( "build", [ "build-posts", "build-resources", "build-member-list" ] );

};
