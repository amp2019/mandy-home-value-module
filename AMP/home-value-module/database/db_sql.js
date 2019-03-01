const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'homes',
  password: 'password',
});

// Query to grab data for all properties 
module.exports = {
  readSingleProperty: (id, callback) => {
    let queryStr = 'SELECT * FROM homes WHERE id = ' + id;
    pool.query(queryStr, (err, data) => {
      if (err) {
        console.log('ERR IN DB', err);
        callback(err, null);
      } else {
        callback(null, data.rows);
      }
    });
  },
  // // finds home property by ID, if already exists, update all fields
  // // else create a new entry
  // saveAProperty: (propObj, callback) => {
  //   let values = [
  //     propObj.id,
  //     propObj.zestimationPrice,
  //     propObj.zestimationPrice,
  //     propObj.startPriceRange,
  //     propObj.endPriceRange,
  //     propObj.thirtyDayPriceChange,
  //     propObj.oneYearForcast,
  //     propObj.propertyLastSalePrice, 
  //     propObj.propertLastSaleDate,
  //     propObj.comparableHomePrice,
  //     propObj.marketAppreciationPrice,
  //     propObj.localSalesAvg,
  //     propObj.sellDate, 
  //     propObj.sellPrice,
  //     propObj.beds, 
  //     propObj.baths,
  //     propObj.sqft, 
  //     propObj.streetAddress, 
  //     propObj.priceSqft,
  //     propObj.saleToList,
  //     propObj.url,
  //   ];
  //   let queryStr = `INSERT INTO homes ("id", "zestimationPrice", "startPriceRange", "endPriceRange", "thirtyDayPriceChange", "oneYearForcast", "propertyLastSalePrice", "propertLastSaleDate", "comparableHomePrice", "marketAppreciationPrice", "localSalesAvg", "sellDate", "sellPrice", "beds", "baths", "sqft", "streetAddress", "priceSqft", "saleToList", "url")
  //   VALUES (?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?, ? ,? ,?, ?, ?, ?, ?) ON CONFLICT ("id") DO UPDATE SET  "zestimationPrice" = EXCLUDED."zestimationPrice",
  //   "startPriceRange" = EXCLUDED."startPriceRange", 
  //   "endPriceRange" = EXCLUDED."endPriceRange", 
  //   "thirtyDayPriceChange" = EXCLUDED."thirtyDayPriceChange", 
  //   "oneYearForcast" = EXCLUDED."oneYearForcast", 
  //   "propertyLastSalePrice" = EXCLUDED."propertyLastSalePrice", 
  //   "propertLastSaleDate" = EXCLUDED."propertLastSaleDate", 
  //   "comparableHomePrice" = EXCLUDED."comparableHomePrice", 
  //   "marketAppreciationPrice" = EXCLUDED."marketAppreciationPrice", 
  //   "localSalesAvg" = EXCLUDED."localSalesAvg", 
  //   "sellDate" = EXCLUDED."sellDate", 
  //   "sellPrice" = EXCLUDED."sellPrice", 
  //   "beds" = EXCLUDED."beds", 
  //   "baths" = EXCLUDED."baths", 
  //   "sqft" = EXCLUDED."sqft", 
  //   "streetAddress" = EXCLUDED."streetAddress", 
  //   "priceSqft" = EXCLUDED."priceSqft", 
  //   "saleToList" = EXCLUDED."saleToList", 
  //   "url" = EXCLUDED."url"`;

  // },
  // deleteAProperty: (propId, callback) => {

  // },
  // updateAProperty: (propObj, callback) => {

  // }
};