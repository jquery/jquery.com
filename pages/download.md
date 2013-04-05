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

The jQuery 1.9 line has major changes from previous versions. We _strongly_
recommend that you also use the jQuery Migrate plugin if you are upgrading from
older versions of jQuery or need to use plugins that haven't yet been updated.
Read the [jQuery 1.9 Upgrade Guide](http://jquery.com/upgrade-guide/1.9/)
and the [jQuery 1.9 release blog post](http://blog.jquery.com/2013/01/15/jquery-1-9-final-jquery-2-0-beta-migrate-final-released/)
for more information.

[Download the compressed, production jQuery 1.9.1](http://code.jquery.com/jquery-1.9.1.min.js)

[Download the uncompressed, development jQuery 1.9.1](http://code.jquery.com/jquery-1.9.1.js)

[jQuery 1.9.1 release notes](http://blog.jquery.com/2013/02/04/jquery-1-9-1-released/)

## jQuery Migrate plugin

We have created the [jQuery Migrate
plugin](http://github.com/jquery/jquery-migrate/#readme)
to simplify the transition from older versions of jQuery.
The plugin restores deprecated features and behaviors so that older code will
still run properly on jQuery 1.9 and later.
Use the _uncompressed development_ version to diagnose compatiblity issues,
it will generate warnings on the console that you can use to identify
and fix problems.
Use the _compressed production_ version to simply fix compatibility issues
without generating console warnings.

[Download the compressed, production jQuery Migrate 1.1.1](http://code.jquery.com/jquery-migrate-1.1.1.min.js)

[Download the uncompressed, development jQuery Migrate 1.1.1](http://code.jquery.com/jquery-migrate-1.1.1.js)

## jQuery Pre-Release Builds

The jQuery team is constantly working to improve the code. Each commit to the Github repo generates a work-in-progress version of the code that we update on the jQuery CDN. _These versions are sometimes unstable and not suitable for production sites._ We recommend they be used to determine whether a bug has already been fixed when reporting bugs against released versions, or to see if new bugs have been introduced. There are two versions, one for the 1.x branch (supports IE 6/7/8) and one for the 2.x branch (not for use with old IE).

[Download the work-in-progress jQuery **1.x** build - http://code.jquery.com/jquery-git1.js](http://code.jquery.com/jquery-git1.js)

[Download the work-in-progress jQuery **2.x** build - http://code.jquery.com/jquery-git2.js](http://code.jquery.com/jquery-git2.js)

## Using jQuery with a CDN

[CDNs](http://en.wikipedia.org/wiki/Content_delivery_network) can offer a performance benefit by hosting jQuery on servers spread across the globe. This also offers an advantage that
if the visitor to your webpage has already downloaded a copy of jQuery from the same CDN, it won't have to be re-downloaded.

### Using jQuery's CDN provided by [MediaTemple](http://mediatemple.net)

```
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
```

To see all available files and versions, visit [http://code.jquery.com](http://code.jquery.com). *Note that this CDN is not available via SSL.*

### Using Google's CDN

All jQuery releases are available on the Google CDN, visit [Google's CDN page](http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery) for more information. *Note that we do not control this CDN; there may be a delay between a jQuery release and its availability there.*

### Using Microsoft's CDN

All jQuery releases are available on the Microsoft CDN, visit [Microsoft's CDN Page](http://www.asp.net/ajaxlibrary/cdn.ashx) for more information. *Note that we do not control this CDN; there may be a delay between a jQuery release and its availability there.*

## About the Code

The code itself is written rather cleanly in an attempt to self-document. If you've spotted some areas of code that could be improved, please feel free to discuss it on the [Developing jQuery Core Forum](https://forum.jquery.com/developing-jquery-core). All input is gladly appreciated!

All of the code is available in two formats:

* Compressed (which allows you to have a significantly smaller file size) and</li>
* Uncompressed (good for debugging and to understand what is behind the magic).</li>

If you're interested in downloading Plugins developed by jQuery contributors, please visit the <a href="http://plugins.jquery.com/">Plugins site</a>.

**jQuery is provided under the <a href="http://jquery.org/license/">MIT license</a>.**

***

## Past Releases

<table>
	<thead><tr><th>Version</th><th>Docs</th><th>Downloads</th></tr></thead>
	<tbody>
		<tr><td>1.9.0</td><td><a href="http://blog.jquery.com/2013/01/15/jquery-1-9-final-jquery-2-0-beta-migrate-final-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.9.0.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.9.0.js">Uncompressed</a></td></tr>
		<tr><td>1.8.3</td><td><a href="http://blog.jquery.com/2012/11/13/jquery-1-8-3-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.8.3.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.8.3.js">Uncompressed</a></td></tr>
		<tr><td>1.8.2</td><td><a href="http://blog.jquery.com/2012/09/20/jquery-1-8-2-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.8.2.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.8.2.js">Uncompressed</a></td></tr>
		<tr><td>1.8.1</td><td><a href="http://blog.jquery.com/2012/08/30/jquery-1-8-1-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.8.1.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.8.1.js">Uncompressed</a></td></tr>
		<tr><td>1.8.0</td><td><a href="http://blog.jquery.com/2012/08/09/jquery-1-8-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.8.0.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.8.0.js">Uncompressed</a></td></tr>
		<tr><td>1.7.2</td><td><a href="http://blog.jquery.com/2012/03/21/jquery-1-7-2-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.7.2.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.7.2.js">Uncompressed</a></td></tr>
		<tr><td>1.7.1</td><td><a href="http://blog.jquery.com/2011/11/21/jquery-1-7-1-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.7.1.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.7.1.js">Uncompressed</a></td></tr>
		<tr><td>1.6.4</td><td><a href="http://blog.jquery.com/2011/09/12/jquery-1-6-4-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.6.4.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.6.4.js">Uncompressed</a></td></tr>
		<tr><td>1.6.3</td><td><a href="http://blog.jquery.com/2011/09/01/jquery-1-6-3-released/">Release Notes</a></td><td><a href="http://code.jquery.com/jquery-1.6.3.min.js">Minified</a> <a href="http://code.jquery.com/jquery-1.6.3.js">Uncompressed</a></td></tr>
	</tbody>
</table>

### Build from Git
*Note:* The following is quite advanced. If you wish to just use a work-in-progress version of jQuery, please try the jQuery Git build instead.

All source code is kept under Git revision control, which you can browse online. There's a download link available for any file or directory, if you only want to download a portion of the jQuery code.

If you have access to Git, you can connect to the repository here:

``` bash
git clone git://github.com/jquery/jquery.git
```

You can also check out a specific version of jQuery from GitHub:

``` bash
git clone git://github.com/jquery/jquery.git
git checkout 1.2.6
```

The repository's <a href="https://github.com/jquery/jquery/blob/master/README.md">README</a> has more information on building and testing your own jQuery, as well as links to core style guidelines and tips for patching bugs.
