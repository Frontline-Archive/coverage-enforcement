'use strict'

var colors = require( 'colors' );
var Table  = require( 'cli-table' );

var branches   = 50;
var functions  = 50;
var lines      = 80;
var statements = 80;

var thresholds = {
	'each' : {
		'branches'   : branches,
		'functions'  : functions,
		'lines'      : lines,
		'statements' : statements
	}
};

var watermarks = {
	'branches'   : [ branches, 80 ],
	'functions'  : [ functions, 85 ],
	'lines'      : [ lines, 90 ],
	'statements' : [ statements, 90 ],
};

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
	'thresholds' : thresholds,
	'watermarks' : watermarks,
	'log'        : log
};
