'use strict';

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var uniqueRandomArray = require('unique-random-array');
//var jsonFile = require('jsonfile');


var file = './src/data.json';
var testData = _jsonfile2.default.readFileSync(file);

var getRandomItem = (0, _uniqueRandomArray2.default)(testData);

module.exports = {
	all: testData,
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		var randomItems = [];
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
};