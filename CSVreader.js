const fs = require('fs');
const parse = require('csv-parse')
const City = require('./Models/city')
const output = []
let csvFile = 'Data/worldcities.csv';

class CSVreader {
    constructor(csvFile) {
        this.csvFile = 'Data/worldcities.csv';

    }
    
      static create(csvFile) {

        return new CSVreader(csvFile);
    }
    
    inputStream (csvFile){
      fs.createReadStream(csvFile)
            .pipe(parse({
                columns: true,
                delimiter: ',',
                trim: true,
                skip_empty_lines: true
            })
                .on('readable', function(){
                    let record
                    while (record = this.read()) {
                      console.log(record)
                        let city = new City(record)
                        output.push(record)
                    }

                })
                // When we are done, test that the parsed output matched what expected
                .on('end', function(){

                   //console.log(output);
                }));
    }
}
module.exports = CSVreader;
