webpackJsonp([0,3],{0:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=document.getElementsByClassName("demonstration")[0];l["default"].render(s["default"].createElement(c["default"],null),e)}r(1),r(5),r(7),r(9),r(11);var o=r(14),s=a(o),i=r(166),l=a(i),p=r(167),c=a(p);n()},1:function(e,t){},5:1,7:1,9:1,11:1,167:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=function(e,t,r){for(var a=!0;a;){var n=e,o=t,s=r;a=!1,null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,o);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(s)}var p=Object.getPrototypeOf(n);if(null===p)return;e=p,t=o,r=s,a=!0,i=p=void 0}},l=r(14),p=a(l),c=r(168),u=a(c),m=r(169),g=a(m),d=r(170),f=a(d),h=function(e){function t(){n(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),s(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement(u["default"],{className:"right",project:g["default"].user+"/"+g["default"].name}),p["default"].createElement(f["default"],null))}}]),t}(p["default"].Component);t["default"]=h,e.exports=t["default"]},168:function(e,t,r){!function(t,a){e.exports=a(r(14))}(this,function(e){return function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=r(1);e.exports=o.createClass({displayName:"exports",render:function(){var e=this.props,t=e.text,r=e.style,s=e.className,i=a(e,["text","style","className"]);return s=s||"",s+=" github-fork-ribbon-wrapper",t=this.props.text||"Fork me on GitHub",o.createElement("div",{className:s},o.createElement("div",{className:"github-fork-ribbon",style:r},o.createElement("a",n({href:"https://github.com/"+this.props.project},i),t)))}})},function(t,r){t.exports=e}])})},169:function(e,t){e.exports={name:"react-svgpathplayer",description:"React component for animating an SVG path and/or a series of SVG paths.",author:"Steve Schwarz <steve@agilitynerd.com> (http://tech.agilitynerd.com/)",user:"saschwarz",scripts:{start:"webpack-dev-server",test:"karma start",tdd:"karma start --auto-watch --no-single-run","test:watch":"npm test -- --watch","gh-pages":"webpack","deploy-gh-pages":"node ./lib/deploy_gh_pages.js",dist:"webpack","dist-min":"webpack","dist-modules":"npm run dist && npm run dist-min",lint:"eslint . --ext .js --ext .jsx","report-coverage":"cat ./build/coverage/coverage-final.json | codecov",commit:"git-cz",preversion:"npm run test && npm run lint",postpublish:"npm run gh-pages && npm run deploy-gh-pages","semantic-release":"semantic-release pre && npm run dist-modules && npm publish && semantic-release post"},main:"dist/svgpathplayer.min.js",dependencies:{classnames:"^2.2.1",lodash:"^3.10.1",react:"^0.14.0","react-dom":"^0.14.0"},devDependencies:{babel:"^5.8.23","babel-core":"^5.0.0","babel-eslint":"^4.1.3","babel-loader":"^5.3.2","babel-plugin-react-transform":"^1.1.1",chai:"^3.3.0","chai-spies":"^0.7.1","clean-webpack-plugin":"^0.1.3","codecov.io":"^0.1.6",commitizen:"^2.4.6","css-loader":"^0.23.1","cz-conventional-changelog":"^1.1.5",eslint:"^1.6.0","eslint-loader":"^1.1.0","eslint-plugin-react":"^3.13.1","extract-text-webpack-plugin":"^0.9.1","file-loader":"^0.8.4","gh-pages":"^0.5.0","git-prepush-hook":"^1.0.1","highlight.js":"^8.8.0","html-webpack-plugin":"^1.6.2","imports-loader":"^0.6.5","isparta-instrumenter-loader":"^0.2.1","isparta-loader":"^1.0.0","json-loader":"^0.5.3",karma:"^0.13.16","karma-chai":"^0.1.0","karma-coverage":"^0.5.3","karma-mocha":"^0.2.0","karma-phantomjs-launcher":"^0.2.2","karma-sourcemap-loader":"^0.3.5","karma-spec-reporter":"0.0.23","karma-webpack":"^1.7.0",marked:"^0.3.5",mocha:"^2.3.4","node-sass":"^3.4.2",phantomjs:"^1.9.18","phantomjs-polyfill":"0.0.1",purecss:"^0.6.0","react-addons-test-utils":"^0.14.3","react-ghfork":"^0.3.2","react-transform-hmr":"^1.0.1","sass-loader":"^3.1.2","semantic-release":"^4.3.5",sinon:"^1.17.2","sinon-chai":"^2.8.0",snapsvg:"git+https://github.com/adobe-webplatform/Snap.svg.git#master","style-loader":"^0.13.0","sync-exec":"^0.6.2","system-bell-webpack-plugin":"^1.0.0","url-loader":"^0.5.6",webpack:"^1.12.2","webpack-dev-server":"^1.12.0","webpack-merge":"^0.7.0"},repository:{type:"git",url:"https://github.com/saschwarz/react-svgpathplayer.git"},homepage:"https://saschwarz.github.io/react-svgpathplayer/",bugs:{url:"https://github.com/saschwarz/react-svgpathplayer/issues"},keywords:["react","reactjs","svg","animation"],license:"MIT","pre-push":["test","lint"],config:{commitizen:{path:"node_modules/cz-conventional-changelog"}},version:"1.0.11"}},170:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=function(e,t,r){for(var a=!0;a;){var n=e,o=t,s=r;a=!1,null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,o);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(s)}var p=Object.getPrototypeOf(n);if(null===p)return;e=p,t=o,r=s,a=!0,i=p=void 0}},l=r(14),p=a(l),c=r(171),u=a(c);r(180),r(181);var m=function(e){function t(){n(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),s(t,[{key:"render",value:function(){var e=[{title:"AJAX, Path, Segments, Marker, Time, Loading & Controls",props:{svg:"./images/pathsegments.svg",path:".dog-path-0",segments:".dog-path-segments-0",marker:".dog",loading:!0,time:10236,scale:1/36,units:"yd"}},{title:"AJAX, Segments, Marker, Time, Loading & Controls",props:{svg:"./images/segments.svg",segments:".dog-path-segments-0",marker:".dog",loading:!0,time:10236,scale:1/39.37,units:"m"}},{title:"AJAX, Path, Marker, Time, Loading & Controls",props:{svg:"./images/pathsegments.svg",path:".dog-path-0",marker:".dog",loading:!0,time:10236,units:"in"}},{title:"AJAX, Path, Segments, Marker, Time, Loading, Start & Repeat",props:{svg:"./images/pathsegments.svg",path:".dog-path-0",segments:".dog-path-segments-0",marker:".dog",loading:!0,time:10236,controls:!1,startplaying:!0,repeat:!0}},{title:"AJAX, Path, Marker, Time, Loading & Start",props:{svg:"./images/pathsegments.svg",path:".dog-path-0",marker:".dog",loading:!0,time:10236,startplaying:!0,controls:!1}}];return p["default"].createElement("div",null,e.map(function(e,t){return p["default"].createElement("div",{className:"pure-u-8-24 demo-container",key:t},p["default"].createElement("h4",null,e.title),p["default"].createElement(u["default"],e.props),p["default"].createElement("pre",{className:"props"},JSON.stringify(e.props,null,"    ")))}))}}]),t}(p["default"].Component);t["default"]=m,e.exports=t["default"]}});