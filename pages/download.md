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

## Using jQuery with a CDN

[CDNs](http://en.wikipedia.org/wiki/Content_delivery_network) can offer a performance benefit by hosting jQuery on servers spread across the globe. This also offers an advantage that
if the visitor to your webpage has already downloaded a copy of jQuery from the same CDN, it won't have to be re-downloaded.

### jQuery's CDN provided by [MaxCDN](http://www.maxcdn.com)

To use the jQuery CDN, just reference the file directly from `http://code.jquery.com` in the script tag:
```
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
```

Starting with jQuery 1.9, [sourcemap files](http://blog.jquery.com/2013/01/09/jquery-1-9-rc1-and-migrate-rc1-released/#sourcemaps) are available on the jQuery CDN as well. If compressed files are included directly from the CDN as shown above, sourcemap-aware browsers such as Google Chrome will use them when you enable sourcemap support.

To see all available files and versions, visit [http://code.jquery.com](http://code.jquery.com)

### Other CDNs

The following CDNs also host compressed and uncompressed versions of jQuery releases. Starting with jQuery 1.9 they may also host [sourcemap files](http://blog.jquery.com/2013/01/09/jquery-1-9-rc1-and-migrate-rc1-released/#sourcemaps); check the site's documentation.

**Note that there may be delays between a jQuery release and its availability there. Please be patient, they receive the files at the same time the blog post is made public. Beta and release candidates are not hosted by these CDNs.**

* [Google CDN](http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery)
* [Microsoft CDN](http://www.asp.net/ajaxlibrary/cdn.ashx#jQuery_Releases_on_the_CDN_0)
* [CDNJS CDN](http://cdnjs.com/libraries/jquery/)

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

***

## Past Releases

All past releases can be found on the [jQuery CDN](http://code.jquery.com). Here are some commonly used recent versions:

<table>
	<thead><tr><th>Version</th><th>Docs</th><th>Downloads</th></tr></thead>
	<tbody>
		<tr><td>2.0.2</td><td><a href="http://blog.jquery.com/2013/05/30/jquery-1-10-1-and-2-0-2-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-2.0.2.min.js">Minified</a> <a href="http://code.jquery.com/jquery-2.0.2.js">Uncompressed</a></td></tr>
		<tr><td>1.10.1</td><td><a href="http://blog.jquery.com/2013/05/30/jquery-1-10-1-and-2-0-2-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.10.1.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.10.1.js">Uncompressed</a></td></tr>
		<tr><td>1.9.1</td><td><a href="http://blog.jquery.com/2013/02/04/jquery-1-9-1-released">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.9.1.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.9.1.js">Uncompressed</a></td></tr>
		<tr><td>1.8.3</td><td><a href="http://blog.jquery.com/2012/11/13/jquery-1-8-3-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.8.3.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.8.3.js">Uncompressed</a></td></tr>
		<tr><td>1.7.2</td><td><a href="http://blog.jquery.com/2012/03/21/jquery-1-7-2-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.7.2.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.7.2.js">Uncompressed</a></td></tr>
		<tr><td>1.6.4</td><td><a href="http://blog.jquery.com/2011/09/12/jquery-1-6-4-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.6.4.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.6.4.js">Uncompressed</a></td></tr>
	</tbody>
</table>

