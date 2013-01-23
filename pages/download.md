<script>
{
  "title": "Download jQuery",
  "pageTemplate": "page-fullwidth.php",
  "customFields": [
    { "key": "hide_title", "value": 1 }
  ]
}
</script>

## Downloading jQuery

The jQuery 1.9 line has major changes from previous versions. We strongly
recommend that you also use the jQuery Migrate plugin if you are upgrading from
older versions of jQuery or need to use plugins that haven't yet been updated.
Read the [jQuery 1.9 Upgrade Guide](http://jquery.com/upgrade-guide/1.9/)
and the [jQuery 1.9 release blog post](http://blog.jquery.com/2013/01/15/jquery-1-9-final-jquery-2-0-beta-migrate-final-released/)
for more information.

[Download the compressed, production jQuery 1.9.0](http://code.jquery.com/jquery.min.js)

[Download the uncompressed, development jQuery 1.9.0](http://code.jquery.com/jquery.js)

## jQuery Migrate plugin

We have created the [jQuery Migrate plugin](http://github.com/jquery/jquery-migrate/) 
to simplify the transition from older versions of jQuery.
The plugin restores deprecated features and behaviors so that older code will
still run properly on jQuery 1.9 and later.
Use the _uncompressed development_ version to diagnose compatiblity issues, 
it will generate warnings on the console that you can use to identify
and fix problems.
Use the _compressed production_ version to simply fix compatibility issues
without generating console warnings.

[Download the compressed, production jQuery Migrate 1.0.0](http://code.jquery.com/jquery-migrate-1.0.0.min.js)

[Download the uncompressed, development jQuery Migrate 1.0.0](http://code.jquery.com/jquery-migrate-1.0.0.js)

## Using jQuery with a CDN

[CDNs](http://en.wikipedia.org/wiki/Content_delivery_network) can offer a performance benefit by hosting jQuery on servers spread across the globe. This also offers an advantage that
if the visitor to your webpage has already downloaded a copy of jQuery from the same CDN, it won't have to be re-downloaded. 

### Using jQuery's CDN provided by [MediaTemple](http://mediatemple.net)

```
<script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.0.0.min.js"></script>
```

To see all available files and versions, visit [http://code.jquery.com](http://code.jquery.com)

### Using Google's CDN

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Visit [Google's CDN page](http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery) for more information.

### Using Microsoft's CDN

```
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.0.min.js"></script>
```

Visit [Microsoft's CDN Page](http://www.asp.net/ajaxlibrary/cdn.ashx) for more information.

Note: We do not control the Microsoft or Google CDNs and there may be a delay from the time of a new release until it is available there.

## About the Code

The code itself is written rather cleanly in an attempt to self-document. If you've spotted some areas of code that could be improved, please feel free to discuss it on the [Developing jQuery Core Forum](https://forum.jquery.com/developing-jquery-core). All input is gladly appreciated!

All of the code is available in two formats:

* Compressed (which allows you to have a significantly smaller file size) and</li>
* Uncompressed (good for debugging and to understand what is behind the magic).</li>
      
If you're interested in downloading Plugins developed by jQuery contributors, please visit the <a href="http://plugins.jquery.com/">Plugins site</a>.

**jQuery is provided under the <a href="http://jquery.org/license">MIT or GPL license</a>.**

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

### jQuery Git

This work-in-progress build, known as jQuery Git, is generated once a minute from the <a href="http://github.com/jquery/jquery">jQuery Git repository</a>. It is provided as a convenience for anyone who wants to help test changes in the next version of jQuery.

When reporting issues with jQuery Git builds of jQuery, please make sure you include the date and time the snapshot was generated (it is listed at the top of the file).

Linking to jQuery Git builds directly from the CDN is not advised, as the file is constantly refreshed and may change from minute to minute as new commits are made to the repository.

<strong>WARNING:</strong> Do NOT use the jQuery Git build in a production system or live application! It is not tested. It is not stable. It will probably blow up on you unexpectedly. You have been warned! If in doubt, stop and use the current release.

jQuery Git <a href="http://code.jquery.com/jquery-git.js">Uncompressed</a>

### Build from Git
*Note:* The following is quite advanced. If you wish to just use a work-in-progress version of jQuery, please try the jQuery Git build instead.

All source code is kept under Git revision control, which you can browse online. There's a download link available for any file or directory, if you only want to download a portion of the jQuery code.

If you have access to Git, you can connect to the repository here:

```shell
git clone git://github.com/jquery/jquery.git
```

You can also check out a specific version of jQuery from GitHub:

```shell
git clone git://github.com/jquery/jquery.git
git checkout 1.2.6
```

The repository's <a href="https://github.com/jquery/jquery/blob/master/README.md">README</a> has more information on building and testing your own jQuery, as well as links to core style guidelines and tips for patching bugs.
