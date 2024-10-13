<script>{
	"title": "Download jQuery"
}</script>

## Latest version

To locally download these files, right-click the link and select "Save as..." from the menu.

Download the compressed, production version:

<a class="button db" href="https://code.jquery.com/jquery-3.7.1.min.js">Download jQuery 3.7.1</a>

* [Download the uncompressed development version of jQuery 3.7.1](https://code.jquery.com/jquery-3.7.1.js)
* [Download the map file for jQuery 3.7.1](https://code.jquery.com/jquery-3.7.1.min.map)
* [jQuery 3.7.1 blog post with release notes](https://blog.jquery.com/2023/08/28/jquery-3-7-1-released-reliable-table-row-dimensions/)

The slim build is a smaller version, that excludes the [ajax](https://api.jquery.com/category/ajax/) and [effects](https://api.jquery.com/category/effects/) modules:

* [Download jQuery 3.7.1 slim build](https://code.jquery.com/jquery-3.7.1.slim.min.js)
* [Download the uncompressed development version of the jQuery 3.7.1 slim build](https://code.jquery.com/jquery-3.7.1.slim.js)
* [Download the map for the jQuery 3.7.1 slim build](https://code.jquery.com/jquery-3.7.1.slim.min.map)

The uncompressed version is best used during development or debugging; the compressed file saves bandwidth and improves performance in production. You can download the [source map](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) file to help with debugging the compressed production version. The source map is _not_ required for end-users to run jQuery; it is a tool to help improve a developer's debugging experience. As of jQuery 1.11/2.1, we [no longer link source maps](https://blog.jquery.com/2014/01/24/jquery-1-11-and-2-1-released/) to compressed releases by default.

Browse the jQuery CDN at **[releases.jquery.com](https://releases.jquery.com)** for a full list of assets, including older and historical versions.

### Upgrade

For help when upgrading jQuery, read the [upgrade guides](/upgrade-guide/).
We also recommend using the [jQuery Migrate plugin](https://github.com/jquery/jquery-migrate).

### jQuery Migrate Plugin

The [jQuery Migrate plugin](https://github.com/jquery/jquery-migrate/#readme) simplifies upgrading from older versions of jQuery. The plugin restores deprecated features and behaviors so that older code will still run properly on newer versions of jQuery.

When upgrading from a pre-1.9 jQuery version to jQuery 1.9 or up to jQuery 3.0, first use jQuery Migrate 1.x:

* <a href="https://code.jquery.com/jquery-migrate-1.4.1.min.js">Download jQuery Migrate 1.4.1</a> (compressed production version)
* <a href="https://code.jquery.com/jquery-migrate-1.4.1.js">Download the uncompressed, development jQuery Migrate 1.4.1</a>

When migrating from jQuery 3.x to a later jQuery 3.x version, use jQuery Migrate 3.x instead:

* <a href="https://code.jquery.com/jquery-migrate-3.5.0.min.js">Download jQuery Migrate 3.5.0</a> (compressed production version)
* <a href="https://code.jquery.com/jquery-migrate-3.5.0.js">Download the uncompressed, development jQuery Migrate 3.5.0</a>

Use the _compressed production_ version to restore compatibility issues without changing any application code.

Use the _uncompressed development_ version to additionally diagnose and help migrate compatibility issues, through helpful warnings on the console that identify how to transition your application code.

## Downloading jQuery using npm or Yarn

jQuery is published on [npm](https://www.npmjs.com/) under the [jquery package](https://www.npmjs.com/package/jquery). You can install the latest version of jQuery with the npm CLI:
```
npm install jquery
```
As an alternative you can use the [Yarn CLI](https://github.com/yarnpkg/yarn):
```
yarn add jquery
```
This will install jQuery in the `node_modules` directory. Within `node_modules/jquery/dist/` you will find an uncompressed release, a compressed release, and a map file.

## jQuery Pre-Release Builds

The jQuery team is constantly working to improve the code. Each commit to the Github repo generates a work-in-progress version of the code that we update on the jQuery CDN. We recommend they be used to determine whether a bug has already been fixed when reporting bugs against released versions, or to see if new bugs have been introduced.

_These versions are sometimes unstable and never suitable for production sites._

<a href="https://releases.jquery.com/jquery/">Browse Git builds of jQuery</a>

## [jQuery CDN](https://releases.jquery.com)

To use the jQuery CDN, reference the file in the script tag directly from the jQuery CDN domain. You can get the complete script tag, including Subresource Integrity attribute, by visiting https://releases.jquery.com and clicking on the version of the file that you want to use. Copy and paste that tag into your HTML file.

The jQuery CDN supports [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (SRI) ([specification](https://www.w3.org/TR/SRI/)) which allows the browser to verify that the files being delivered have not been modified. Adding the new integrity attribute will ensure your application gains this security improvement in supporting browsers.

Starting with jQuery 1.9, [sourcemap files](https://blog.jquery.com/2013/01/09/jquery-1-9-rc1-and-migrate-rc1-released/#sourcemaps) are available on the jQuery CDN. However, as of version 1.10.0/2.1.0 the compressed jQuery no longer includes the sourcemap comment in CDN copies because it requires the uncompressed file and sourcemap file to be placed at the same location as the compressed file. If you are maintaining local copies and can control the locations all three files, you can add the sourcemap comment to the compressed file for easier debugging.

To see all available files and versions, including older and historical versions, visit [https://releases.jquery.com](https://releases.jquery.com)

### Other CDNs

The following CDNs also host compressed and uncompressed versions of jQuery releases. Starting with jQuery 1.9 they may also host [sourcemap files](https://blog.jquery.com/2013/01/09/jquery-1-9-rc1-and-migrate-rc1-released/#sourcemaps); check the site's documentation.

Note that **there may be delays between a jQuery release and its availability there**. Please be patient, they receive the files at the same time the blog post is made public. Beta and release candidates are not hosted by these CDNs.

* [Google CDN](https://developers.google.com/speed/libraries#jquery)
* [Microsoft CDN](https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview#jQuery_Releases_on_the_CDN_0)
* [CDNJS CDN](https://cdnjs.com/libraries/jquery/)
* [jsDelivr CDN](https://www.jsdelivr.com/package/npm/jquery)

## About the Code

**jQuery is provided under the <a href="https://jquery.com/license/">MIT license</a>.**

The code is hosted and developed in the [jQuery GitHub repository](https://github.com/jquery/jquery). If you've spotted some areas of code that could be improved, feel free to [report a bug](https://contribute.jquery.org/bug-reports/). If you'd like to participate in developing jQuery, peruse our [contributor site](https://contribute.jquery.org) for more information.

Feedback about a jQuery plugin should be directed to the plugin author, not the jQuery team.

-----

## Past Releases

All past releases can be found on the [jQuery CDN](https://releases.jquery.com).

