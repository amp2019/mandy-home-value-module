const faker = require('faker');

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
};

// const data = [];

for (let i = 1; i < 100; i++) {
  var obj = {
    id: i, 
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
  // for Postgres, replace with pipe '|'

  let outputStr =  
  obj.id + '\t' +
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
  obj.url;
  console.log(outputStr);
}
