<script>
{
	"title": "jQuery CDN",
	"pageTemplate": "page-contentfull.php",
	"customFields": [
		{ "key": "hide_title", "value": 1 }
	]
}
</script>

## Using jQuery with a CDN

[CDNs](http://en.wikipedia.org/wiki/Content_delivery_network) can offer a performance benefit by hosting jQuery on servers spread across the globe. This also offers an advantage that
if the visitor to your webpage has already downloaded a copy of jQuery from the same CDN, it won't have to be re-downloaded.

### jQuery's CDN provided by [MaxCDN](http://www.maxcdn.com)

To use the jQuery CDN, just reference the file directly from `//code.jquery.com` in the script tag (now supporting `https`):
```
<script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
```

Starting with jQuery 1.9, [sourcemap files](http://blog.jquery.com/2013/01/09/jquery-1-9-rc1-and-migrate-rc1-released/#sourcemaps) are available on the jQuery CDN as well. If compressed files are included directly from the CDN as shown above, sourcemap-aware browsers such as Google Chrome will use them when you enable sourcemap support.

To see all available files and versions, visit [http://code.jquery.com](http://code.jquery.com)

### Other CDNs

The following CDNs also host compressed and uncompressed versions of jQuery releases. Starting with jQuery 1.9 they may also host [sourcemap files](http://blog.jquery.com/2013/01/09/jquery-1-9-rc1-and-migrate-rc1-released/#sourcemaps); check the site's documentation.

**Note that there may be delays between a jQuery release and its availability there. Please be patient, they receive the files at the same time the blog post is made public. Beta and release candidates are not hosted by these CDNs.**

* [Google CDN](http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery)
* [Microsoft CDN](http://www.asp.net/ajaxlibrary/cdn.ashx#jQuery_Releases_on_the_CDN_0)
* [JSDelivr CDN](http://www.jsdelivr.com/#!jquery)
* [CDNJS CDN](http://cdnjs.com/#jquery)

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