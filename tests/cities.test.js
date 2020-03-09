const City = require('../Models/city')
const CSVreader = require('../CSVreader')
let csvFile = 'Data/worldcities.csv';

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Can create a CSVreader object', () => {
    let csvReader = new CSVreader();
    expect(csvReader).toBeInstanceOf(CSVreader);
});
test('Can create a CSVreader object', () => {
    let csvReader = CSVreader.create(csvFile);
    expect(csvReader).toBeInstanceOf(CSVreader);
});

test('Can read CVS file', () => {
    let csvReader = new CSVreader(csvFile);
    results = csvReader.inputStream;
    expect(results);
});
