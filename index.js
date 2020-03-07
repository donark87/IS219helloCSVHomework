const parse = require('csv-parse')
const fs = require('fs');
const City = require('./Models/city')
const output = [];
const CSVreader = require('./CSVreader')
let csvFile = 'Data/worldcities.csv';

var results = new Array();
let csvReader = new CSVreader(csvFile);
results = csvReader.inputStream(csvFile);
