(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash.kebabcase'), require('path')) :
  typeof define === 'function' && define.amd ? define(['lodash.kebabcase', 'path'], factory) :
  (global.nuxtElementUi = factory(global._kebabCase,global.path));
}(this, (function (_kebabCase,path) { 'use strict';

  _kebabCase = _kebabCase && _kebabCase.hasOwnProperty('default') ? _kebabCase['default'] : _kebabCase;

  var name = "nuxt-element-ui";
  var version = "1.0.10";
  var description = "A Nuxt module for Element UI.";
  var keywords = [
  	"nuxt",
  	"element-ui"
  ];
  var main = "dist/nuxt-element-ui.umd.js";
  var module$1 = "dist/nuxt-element-ui.es5.js";
  var typings = "dist/types/nuxt-element-ui.d.ts";
  var files = [
  	"dist"
  ];
  var author = "Gregory Bouteiller <gregory.bouteiller@niama.re>";
  var repository = "https://github.com/gbouteiller/nuxt-element-ui.git";
  var license = "MIT";
  var engines = {
  	node: ">=6.0.0"
  };
  var scripts = {
  	prebuild: "rimraf dist",
  	build: "tsc --module commonjs && rollup -c rollup.config.ts",
  	start: "rollup -c rollup.config.ts -w",
  	test: "jest",
  	"test:watch": "jest --watch",
  	"test:prod": "npm run test -- --coverage --no-cache"
  };
  var jest = {
  	transform: {
  		".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  	},
  	testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  	moduleFileExtensions: [
  		"ts",
  		"tsx",
  		"js"
  	],
  	coveragePathIgnorePatterns: [
  		"/node_modules/",
  		"/test/"
  	],
  	coverageThreshold: {
  		global: {
  			branches: 90,
  			functions: 95,
  			lines: 95,
  			statements: 95
  		}
  	},
  	collectCoverage: true
  };
  var devDependencies = {
  	"@types/jest": "^23.3.1",
  	"@types/node": "^10.5.5",
  	"@types/react": "^16.4.7",
  	rollup: "^0.66.6",
  	"rollup-plugin-commonjs": "^9.1.4",
  	"rollup-plugin-copy": "^0.2.3",
  	"rollup-plugin-json": "^3.0.0",
  	"rollup-plugin-node-builtins": "^2.1.2",
  	"rollup-plugin-node-resolve": "^3.3.0",
  	"rollup-plugin-sourcemaps": "^0.4.2",
  	"rollup-plugin-typescript2": "^0.17.1",
  	"ts-jest": "^23.0.1",
  	"ts-node": "^7.0.0",
  	tslint: "^5.11.0",
  	"tslint-config-prettier": "^1.14.0",
  	typescript: "^3.0.1"
  };
  var dependencies = {
  	"element-ui": "git+https://github.com/dev800/element-ui.git#feature/local",
  	"lodash.camelcase": "^4.3.0",
  	"lodash.kebabcase": "^4.1.1"
  };
  var _package = {
  	name: name,
  	version: version,
  	description: description,
  	keywords: keywords,
  	main: main,
  	module: module$1,
  	typings: typings,
  	files: files,
  	author: author,
  	repository: repository,
  	license: license,
  	engines: engines,
  	scripts: scripts,
  	jest: jest,
  	devDependencies: devDependencies,
  	dependencies: dependencies
  };

  var meta = /*#__PURE__*/Object.freeze({
    name: name,
    version: version,
    description: description,
    keywords: keywords,
    main: main,
    module: module$1,
    typings: typings,
    files: files,
    author: author,
    repository: repository,
    license: license,
    engines: engines,
    scripts: scripts,
    jest: jest,
    devDependencies: devDependencies,
    dependencies: dependencies,
    default: _package
  });

  function nuxtElementUiModule(moduleOptions) {
      var options = Object.assign({}, this.options.elementUI || moduleOptions);
      options.components = (options.components || []).map(function (className) { return ({ className: className, fileName: _kebabCase(className) }); });
      if (!options.locale)
          options.locale = 'en';
      this.addPlugin({ src: path.join(__dirname, './lib/templates/plugin.js'), options: options });
  }
  nuxtElementUiModule['meta'] = meta;

  return nuxtElementUiModule;

})));
//# sourceMappingURL=nuxt-element-ui.umd.js.map
