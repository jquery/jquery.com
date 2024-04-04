<script>{
	"title": "Browser Support"
}</script>

## Current Active Support

### Desktop

* Chrome: (Current - 1) and Current
* Edge: (Current - 1) and Current
* Firefox: (Current - 1) and Current, ESR
* Internet Explorer: 9+
* Safari: (Current - 1) and Current
* Opera: Current

### Mobile

* Stock browser on Android 4.0+<sup>[1]</sup>
* Safari on iOS 7+<sup>[1]</sup>

<small>[1]</small>: Workarounds for Android Browser 4.0-4.3 & iOS 7 are present in the code base, but we no longer actively test these versions. iOS 8 & newer versions are tested.

Any problem with jQuery in the above browsers should be reported as a bug in jQuery.

<em>(Current - 1) and Current</em> denotes that we support the current stable version of the browser and the version that preceded it. For example, if the current version of a browser is 24.x, we support the 24.x and 23.x versions.

Firefox ESR (Extended Support Release) is a Firefox version for use by organizations including schools, universities, businesses and others who need extended support for mass deployments. It is based on a regular release of Firefox and synced from the next regular Firefox every few releases - example ESR versions include Firefox 47, 52 & 60. At any given time there are at most two ESR versions available; jQuery supports both of them. See [the Mozilla site](https://www.mozilla.org/en-US/firefox/organizations/) for more information.

If you need to support older browsers like Internet Explorer 6-8, Opera 12.1x or Safari 5.1+, download [jQuery 1.12](https://releases.jquery.com/jquery/#jquery-all-1.x) instead.

-----

## Unsupported Browsers

While jQuery <em>might</em> run without major issues in older browser versions, we do not actively test jQuery in them and generally do not fix bugs that may appear in them.

Similarly, jQuery does not fix bugs in pre-release versions of browsers, such as beta or dev releases. If you find a bug with jQuery in a pre-release of a browser, you should report the bug to the browser vendor.

-----

## About Browser Support

jQuery is constantly tested with all of its supported browsers via unit tests. However, a web page using jQuery may not work in the same set of browsers if its own code takes advantage of (or falls prey to) browser-specific behaviors. Testing is essential to fully support a browser.

Only the most current version of jQuery is tested and updated to fix bugs or add features. Users of older versions that find a bug should upgrade to the latest released version to determine if the bug has already been fixed. The [jQuery Migrate plugin](https://github.com/jquery/jquery-migrate/#readme) may be helpful in identifying and fixing problems during a version upgrade.

-----

## About CSS Selector Compatibility

Regardless of a browser's support of CSS selectors, all selectors listed at https://api.jquery.com/category/selectors/ will return the correct set of elements when passed as an argument of the `jQuery` function.

CSS styles applied with jQuery's `.css()` method are dependent on the browser's level of support. In general, jQuery does not attempt to overcome the limitations of a browser's style rendering. (One exception is `opacity`, which jQuery "shims" for older Internet Explorer's alternative implementation.) Furthermore, prior to version 1.8, jQuery does not normalize vendor-prefixed properties.
