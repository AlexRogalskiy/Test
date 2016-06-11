//var uniqueRandomArray = require('unique-random-array');
//var jsonFile = require('jsonfile');
import uniqueRandomArray from 'unique-random-array';
import jsonFile from 'jsonfile';

var file = './src/data.json'
var testData = jsonFile.readFileSync(file);

var getRandomItem = uniqueRandomArray(testData);

module.exports = {
	all: testData,
	random: random
};

function random(number) {
	if(number === undefined) {
		return getRandomItem();
	} else {
		var randomItems = [];
		for(var i=0; i<number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
};