const { createConfig, babel, postcss } = require('webpack-blocks');
const path = require('path');

module.exports = {
	webpackConfig: createConfig([babel(), postcss()]),
	components: "lib/components/**/*.{js, jsx}",
	// template: "www/js/apps/lib/styleguide/index.html",
	// assetsDir: "www/js/apps/lib/styleguide/"
};