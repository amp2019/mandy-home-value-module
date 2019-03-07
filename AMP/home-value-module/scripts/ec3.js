const fs = require('fs');
const faker = require('faker');

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
};

// Documentation: https://nodejs.org/api/stream.html#stream_writable_streams
// Write the data to the supplied writable stream 10 million times.

let generator = (writer, callback) => {
  let i = 2000000;
  write();
  function write() {
    let ok = true;
    do {
      let obj = {
        _id: i + '', 
        zestimationPrice: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})), 
        startPriceRange: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
        endPriceRange: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
        thirtyDayPriceChange: numberWithCommas(faker.random.number({'min': 15000, 'max': 50000})),
        oneYearForcast: numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)})),
        propertyLastSalePrice: numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000)})), 
        propertLastSaleDate: `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`, 
        comparableHomePrice: numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)})), 
        marketAppreciationPrice: numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)})),
        localSalesAvg: numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)})),
        sellDate: `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`,
        sellPrice: numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})),
        beds: faker.random.number({'min': 2, 'max': 6}),
        baths: faker.random.number({'min': 2, 'max': 4}),
        sqft: numberWithCommas(faker.random.number({'min': 1000, 'max': 3500})),
        streetAddress: faker.address.streetAddress(),
        priceSqft: numberWithCommas(faker.random.number({'min': 1200, 'max': 2500})), 
        saleToList: faker.random.number({'min': 91, 'max': 105}),
        url: `https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large${i%100 + 1}.jpg`
      };
        // tab delimiter '\t' is for Mongo
        // for Postgres, replace with pipe '|' & remove id
      
      let outputStr =  
      obj._id + '\t' +
      obj.zestimationPrice + '\t' + 
      obj.startPriceRange + '\t' +
      obj.endPriceRange + '\t' +
      obj.thirtyDayPriceChange + '\t' + 
      obj.oneYearForcast + '\t' + 
      obj.propertyLastSalePrice + '\t' + 
      obj.propertLastSaleDate + '\t' + 
      obj.comparableHomePrice + '\t' + 
      obj.marketAppreciationPrice + '\t' + 
      obj.localSalesAvg + '\t' + 
      obj.sellDate + '\t' + 
      obj.sellPrice + '\t' + 
      obj.beds + '\t' + 
      obj.baths + '\t' +
      obj.sqft + '\t' + 
      obj.streetAddress + '\t' + 
      obj.priceSqft + '\t' + 
      obj.saleToList + '\t' + 
      obj.url + '\n';
      i++;
      if (i === 3000000) {
        // last time!
        writer.write(outputStr, () => callback('successfully written data to file'));
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(outputStr);
      }
    } while (i <= 3000000 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
};

// defines a path and create a writeable stream
const writer = fs.createWriteStream('./prop3.txt');

// invoke generator function, passing in console log as the callback
generator(writer, console.log);
