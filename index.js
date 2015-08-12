'use strict';

var log        = require( './lib/log' );
var reporters  = require( './lib/reporters' );
var thresholds = require( './lib/thresholds' );
var watermarks = require( './lib/watermarks' );

module.exports = {
	'log'        : log,
	'reporters'  : reporters,
	'thresholds' : thresholds,
	'watermarks' : watermarks
};
