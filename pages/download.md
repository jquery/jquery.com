<script>
{
	"title": "Download jQuery",
	"pageTemplate": "page-contentfull.php",
	"customFields": [
		{ "key": "hide_title", "value": 1 }
	]
}
</script>

## Downloading jQuery

Compressed and uncompressed copies of jQuery files are available. The uncompressed file is best used during development or debugging; the compressed file saves bandwidth and improves performance in production.
Starting with jQuery 1.9, we also make available
[sourcemap files](http://blog.jquery.com/2013/01/09/jquery-1-9-rc1-and-migrate-rc1-released/#sourcemaps)
that can be used to debug the compressed file in sourcemap-aware browsers such as Google Chrome.
The map file is _not_ required for users to run jQuery, it just improves the developer's debugger experience.

To locally download these files, right-click the link and select "Save as..." from the menu.

### jQuery 1.x

The jQuery 1.x line had major changes as of jQuery 1.9.0. We _strongly_
recommend that you also use the jQuery Migrate plugin if you are upgrading from
pre-1.9 versions of jQuery or need to use plugins that haven't yet been updated.
Read the [jQuery 1.9 Upgrade Guide](http://jquery.com/upgrade-guide/1.9/)
and the [jQuery 1.9 release blog post](http://blog.jquery.com/2013/01/15/jquery-1-9-final-jquery-2-0-beta-migrate-final-released/)
for more information.

[Download the compressed, production jQuery 1.10.2](http://code.jquery.com/jquery-1.10.2.min.js)

[Download the uncompressed, development jQuery 1.10.2](http://code.jquery.com/jquery-1.10.2.js)

[Download the map file for jQuery 1.10.2](http://code.jquery.com/jquery-1.10.2.min.map)

[jQuery 1.10.2 release notes](http://blog.jquery.com/?p=3006)

### jQuery 2.x

jQuery 2.x has the same API as jQuery 1.x, but _does not support Internet Explorer 6, 7, or 8_.
All the notes in the [jQuery 1.9 Upgrade Guide](http://jquery.com/upgrade-guide/1.9/) apply here as well.
Since IE 6/7/8 are still relatively common, we recommend using the 1.x version unless you
are certain no IE 6/7/8 users are visiting the site.
Please read the [2.0 release notes](http://blog.jquery.com/2013/04/18/jquery-2-0-released/) carefully.

[Download the compressed, production jQuery 2.0.3](http://code.jquery.com/jquery-2.0.3.min.js)

[Download the uncompressed, development jQuery 2.0.3](http://code.jquery.com/jquery-2.0.3.js)

[Download the map file for jQuery 2.0.3](http://code.jquery.com/jquery-2.0.3.min.map)

[jQuery 2.0.3 release notes](http://blog.jquery.com/?p=3006)

## jQuery Migrate plugin

We have created the [jQuery Migrate plugin](http://github.com/jquery/jquery-migrate/#readme)
to simplify the transition from older versions of jQuery. The plugin restores deprecated features and behaviors so that older code will still run properly on jQuery 1.9 and later. Use the _uncompressed development_ version to diagnose compatiblity issues, it will generate warnings on the console that you can use to identify and fix problems. Use the _compressed production_ version to simply fix compatibility issues without generating console warnings.

[Download the compressed, production jQuery Migrate 1.2.1](http://code.jquery.com/jquery-migrate-1.2.1.min.js)

[Download the uncompressed, development jQuery Migrate 1.2.1](http://code.jquery.com/jquery-migrate-1.2.1.js)

## jQuery Pre-Release Builds

The jQuery team is constantly working to improve the code. Each commit to the Github repo generates a work-in-progress version of the code that we update on the jQuery CDN. _These versions are sometimes unstable and not suitable for production sites._ We recommend they be used to determine whether a bug has already been fixed when reporting bugs against released versions, or to see if new bugs have been introduced. There are two versions, one for the 1.x branch (supports IE 6/7/8) and one for the 2.x branch (not for use with old IE).

[Download the work-in-progress jQuery **1.x** build - http://code.jquery.com/jquery-git1.js](http://code.jquery.com/jquery-git1.js)

[Download the work-in-progress jQuery **2.x** build - http://code.jquery.com/jquery-git2.js](http://code.jquery.com/jquery-git2.js)

## About the Code

**jQuery is provided under the <a href="http://jquery.org/license/">MIT license</a>.**

The code is hosted and developed in the [jQuery GitHub repository](http://github.com/jquery/jquery). If you've spotted some areas of code that could be improved, please feel free to discuss it on the [Developing jQuery Core Forum](https://forum.jquery.com/developing-jquery-core). If you'd like to participate in developing jQuery, peruse our [contributor site](http://contribute.jquery.org) for more information.

To find and download plugins developed by jQuery contributors, please visit the <a href="http://plugins.jquery.com/">Plugins site</a>. Plugin authors are responsible for maintenance of their plugins. Feedback on plugins should be directed to the plugin author, not the jQuery team.

### Build from Git

*Note:* To just use the latest work-in-progress version of jQuery, please try the jQuery Pre-Release Build described above.

All source code is kept under Git revision control, which you can browse online. The repository's <a href="https://github.com/jquery/jquery/blob/master/README.md">README</a> has more information on building and testing your own jQuery, as well as instructions on creating a custom build that excludes some APIs to reduce file size.

If you have access to Git, you can connect to the repository here:

``` bash
git clone git://github.com/jquery/jquery.git
```

You can also check out and build a specific version of jQuery from GitHub:

``` bash
git clone git://github.com/jquery/jquery.git
git checkout 1.2.6
```

The README file for a specific version will have instructions for building that version, as the process has changed over time.
