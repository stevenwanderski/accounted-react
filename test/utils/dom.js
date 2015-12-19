// var jsdom = require('jsdom')

// // setup the simplest document possible
// var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

// // get the window object out of the document
// var win = doc.defaultView

// // set globals for mocha that make access to document and window feel
// // natural in the test environment
// global.document = doc
// global.window = win

// // take all properties of the window object and also attach it to the
// // mocha global object
// propagateToGlobal(win)

// // from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
// function propagateToGlobal (window) {
//   for (let key in window) {
//     if (!window.hasOwnProperty(key)) continue
//     if (key in global) continue

//     global[key] = window[key]
//   }
// }

import localStorage from 'localStorage';
import {jsdom} from 'jsdom';

// init jsdom
global.document = jsdom();
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// local storage polyfill
global.window.localStorage = localStorage;
global.localStorage = localStorage;

// // import react after dom
// const React = require('react/addons');

// before(function() {
//     // expose react and testutils
//     this.React = React;
//     this.TestUtils = React.addons.TestUtils;
// });

// beforeEach(function() {
//     // create container
//     this.container = global.window.document.createElement('div');
// });

// afterEach(function(done) {
//     // clean jsdom
//     this.React.unmountComponentAtNode(this.container);
//     // timeout
//     setTimeout(done);
// });