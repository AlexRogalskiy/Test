var uniqueRandomArray = require('unique-random-array');
var jsonFile = require('jsonfile');

var file = './src/data.json'
var testData = jsonFile.readFileSync(file);

module.exports = {
	all: testData,
	random: uniqueRandomArray(testData)
};
