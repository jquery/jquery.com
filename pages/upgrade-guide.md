<script>{
	"title": "jQuery Core Upgrade Guides",
	"noHeadingLinks": true
}</script>

## jQuery Upgrade Guides

The jQuery Upgrade Guides can be helpful when you're looking for more details on a breaking change, or you just want to see the full list of breaking changes for each version. There are upgrade guides for jQuery 1.9, 3.0 and 3.5 that list all of the breaking changes that happened in those releases. Most of the breaking changes listed will probably not apply to your code, but these guides add some context and explanation for each change.

### [3.5 Upgrade Guide](/upgrade-guide/3.5/)

### [3.0 Upgrade Guide](/upgrade-guide/3.0/)

### [1.9 Upgrade Guide](/upgrade-guide/1.9/)

### Upgrading jQuery

The jQuery Team provides the [jQuery Migrate plugin](https://github.com/jquery/jquery-migrate) to make upgrading jQuery as easy as possible. It is mainly meant as a development tool that generates warning messages in the browser console that can be used to identify and fix compatibility issues. It temporarily restores deprecated features and behaviors so that older code will still run on newer versions of jQuery while the compatibility issues are addressed.

There are two versions of jQuery Migrate: [1.x](https://github.com/jquery/jquery-migrate/tree/1.x-stable) and [3.x](https://github.com/jquery/jquery-migrate) (there is no Migrate 2.x). Only one version should be used at a time, but you may need to use both in succession if upgrading from a jQuery version that predates jQuery 1.9.

For example, if your current jQuery version is 1.4.4, first use jQuery Migrate 1.x to upgrade to jQuery 1.12.4 and then use jQuery Migrate 3.x to upgrade to the latest jQuery (3.7.1, as of this writing). If your current version is 1.9 or later, you only need to use jQuery Migrate 3.x to upgrade to the latest jQuery.

#### Using jQuery Migrate

First, add jQuery Migrate to your page *after* loading jQuery.

```html
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="https://code.jquery.com/jquery-migrate-3.4.1.js"></script>
```

Then, test your website or application. As different jQuery APIs are used, jQuery Migrate will log messages to the console warning about any deprecations or breaking changes. Address each warning one at a time.

Finally, when no more warnings are logged to the console and all breaking changes have been addressed, the jQuery Migrate can be removed and migration is complete!

See the [jQuery Migrate README](https://github.com/jquery/jquery-migrate) for more details.
