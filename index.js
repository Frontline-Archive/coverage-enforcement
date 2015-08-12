'use strict'

var colors = require( 'colors' );
var Table  = require( 'cli-table' );

var branches   = 80;
var functions  = 85;
var lines      = 90;
var statements = 90;

var thresholds = {
	'each' : {
		'branches'   : branches,
		'functions'  : functions,
		'lines'      : lines,
		'statements' : statements
	}
};

var watermarks = {
    'branches'   : [ branches, Math.round( Math.min( 100, branches * 1.1 ) * 100 ) / 100 ],
    'functions'  : [ functions, Math.round( Math.min( 100, functions * 1.1 ) * 100 ) / 100 ],
    'lines'      : [ lines, Math.round( Math.min( 100, lines * 1.1 ) * 100 ) / 100 ],
    'statements' : [ statements, Math.round( Math.min( 100, statements * 1.1 ) * 100 ) / 100 ],
};

var reporters = [
	'html',
	'json-summary',
	'json',
	'text-summary',
	'text'
];

function log ( file ) {
	var table = new Table( {
		'head' : [ 'Metric'.white.bold, 'Warning'.yellow.bold, 'Error'.red.bold ]
	} );

	table.push( [ 'Branches', watermarks.branches[ 1 ].toString().yellow, watermarks.branches[ 0 ].toString().red ] );
	table.push( [ 'Functions', watermarks.functions[ 1 ].toString().yellow, watermarks.functions[ 0 ].toString().red ] );
	table.push( [ 'Lines', watermarks.lines[ 1 ].toString().yellow, watermarks.lines[ 0 ].toString().red ] );
	table.push( [ 'Statements', watermarks.statements[ 1 ].toString().yellow, watermarks.statements[ 0 ].toString().red ] );

	console.log( 'Coverage thresholds'.white.bold )
	console.log( table.toString() );
}

module.exports = {
	'log'        : log,
	'reporters'  : reporters,
	'thresholds' : thresholds,
	'watermarks' : watermarks
};
