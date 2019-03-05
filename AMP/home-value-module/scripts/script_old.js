const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');

// // output file in the same folder
const filename = path.join(__dirname, 'output2.csv');
const output = []; // holds all rows of data

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
};

const data = [];

for (let i = 1; i < 1000; i++) {
  var obj = {
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
  data.push(obj);
}
data.forEach((d) => {
  const row = []; // a new array for each row of data
  row.push(d.zestimationPrice);
  row.push(d.startPriceRange);
  row.push(d.endPriceRange);
  row.push(d.thirtyDayPriceChange);
  row.push(d.oneYearForcast);
  row.push(d.propertyLastSalePrice);
  row.push(d.propertLastSaleDate);
  row.push(d.comparableHomePrice);
  row.push(d.marketAppreciationPrice);
  row.push(d.localSalesAvg);
  row.push(d.sellDate);
  row.push(d.sellPrice);
  row.push(d.beds);
  row.push(d.baths);
  row.push(d.sqft);
  row.push(d.streetAddress);
  row.push(d.priceSqft);
  row.push(d.saleToList);
  row.push(d.url);
  output.push(row.join('|')); // by default, join() uses a ','
});


fs.writeFileSync(filename, output.join(os.EOL));