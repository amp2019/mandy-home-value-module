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
    let queryStr = 'SELECT * FROM homes2 WHERE id = ' + id;
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
  saveAProperty: (propObj, callback) => {
    console.log('!!!!!!!propObj is ', propObj);

    let queryStr = `INSERT INTO homes2 ("id", "zestimationPrice", "startPriceRange", "endPriceRange", "thirtyDayPriceChange", "oneYearForcast", "propertyLastSalePrice", "propertLastSaleDate", "comparableHomePrice", "marketAppreciationPrice", "localSalesAvg", "sellDate", "sellPrice", "beds", "baths", "sqft", "streetAddress", "priceSqft", "saleToList", "url")
    VALUES (${propObj.id}, 
      '${propObj.zestimationPrice}', 
      '${propObj.startPriceRange}', 
      '${propObj.endPriceRange}',
      '${propObj.thirtyDayPriceChange}',
      '${propObj.oneYearForcast}',
      '${propObj.propertyLastSalePrice}',
      '${propObj.propertLastSaleDate}',
      '${propObj.comparableHomePrice}',
      '${propObj.marketAppreciationPrice}',
      '${propObj.localSalesAvg}',
      '${propObj.sellDate}',
      '${propObj.sellPrice}',
      ${propObj.beds},
      ${propObj.baths},
      '${propObj.sqft}',
      '${propObj.streetAddress}',
      '${propObj.priceSqft}',
      '${propObj.saleToList}',  
      '${propObj.url}') 
    ON CONFLICT("id") 
    DO UPDATE SET 
    "zestimationPrice" = '${propObj.zestimationPrice}',
    "startPriceRange" = '${propObj.startPriceRange}', 
    "endPriceRange" = '${propObj.endPriceRange}',
    "thirtyDayPriceChange" = '${propObj.thirtyDayPriceChange}',
    "oneYearForcast" = '${propObj.oneYearForcast}',
    "propertyLastSalePrice" = '${propObj.propertyLastSalePrice}',
    "propertLastSaleDate" =  '${propObj.propertLastSaleDate}',
    "comparableHomePrice" = '${propObj.comparableHomePrice}',
    "marketAppreciationPrice" = '${propObj.marketAppreciationPrice}',
    "localSalesAvg" = '${propObj.localSalesAvg}',
    "sellDate" = '${propObj.sellDate}',
    "sellPrice" = '${propObj.sellPrice}',
    "beds" = ${propObj.beds},
    "baths" = ${propObj.baths},
    "sqft" = '${propObj.sqft}',
    "streetAddress" = '${propObj.streetAddress}',
    "priceSqft" = '${propObj.priceSqft}',
    "saleToList" = '${propObj.saleToList}',
    "url" = '${propObj.url}'`;

    pool.query(queryStr, (err) => {
      if (err) {
        console.log("error", err);
        callback(err);
        return;
      }
      console.log('MADE IT TO DB!!');
      callback(null);
    });
  },
  deleteAProperty: (propId, callback) => {
    console.log('id is !!!!!!!!', propId);
    let queryStr = 'DELETE FROM homes2 WHERE id = ' + propId;

    pool.query(queryStr, (err) => {
      if (err) {
        console.log('error', err);
        callback(err, null);
      }
      console.log('MADE IT TO DB!!');
      callback(null);
    });
  },
  updateAProperty: (propObj, callback) => {
    console.log('propObj is ', probObj);
    let queryStr = `INSERT INTO homes2 ("id", "zestimationPrice", "startPriceRange", "endPriceRange", "thirtyDayPriceChange", "oneYearForcast", "propertyLastSalePrice", "propertLastSaleDate", "comparableHomePrice", "marketAppreciationPrice", "localSalesAvg", "sellDate", "sellPrice", "beds", "baths", "sqft", "streetAddress", "priceSqft", "saleToList", "url")
    VALUES (${propObj.id}, 
      '${propObj.zestimationPrice}', 
      '${propObj.startPriceRange}', 
      '${propObj.endPriceRange}',
      '${propObj.thirtyDayPriceChange}',
      '${propObj.oneYearForcast}',
      '${propObj.propertyLastSalePrice}',
      '${propObj.propertLastSaleDate}',
      '${propObj.comparableHomePrice}',
      '${propObj.marketAppreciationPrice}',
      '${propObj.localSalesAvg}',
      '${propObj.sellDate}',
      '${propObj.sellPrice}',
      ${propObj.beds},
      ${propObj.baths},
      '${propObj.sqft}',
      '${propObj.streetAddress}',
      '${propObj.priceSqft}',
      '${propObj.saleToList}',
      '${propObj.url}') 
    ON CONFLICT("id") 
    DO UPDATE SET 
    "zestimationPrice" = '${propObj.zestimationPrice}',
    "startPriceRange" = '${propObj.startPriceRange}', 
    "endPriceRange" = '${propObj.endPriceRange}',
    "thirtyDayPriceChange" = '${propObj.thirtyDayPriceChange}',
    "oneYearForcast" = '${propObj.oneYearForcast}',
    "propertyLastSalePrice" = '${propObj.propertyLastSalePrice}',
    "propertLastSaleDate" =  '${propObj.propertLastSaleDate}',
    "comparableHomePrice" = '${propObj.comparableHomePrice}',
    "marketAppreciationPrice" = '${propObj.marketAppreciationPrice}',
    "localSalesAvg" = '${propObj.localSalesAvg}',
    "sellDate" = '${propObj.sellDate}',
    "sellPrice" = '${propObj.sellPrice}',
    "beds" = ${propObj.beds},
    "baths" = ${propObj.baths},
    "sqft" = '${propObj.sqft}',
    "streetAddress" = '${propObj.streetAddress}',
    "priceSqft" = '${propObj.priceSqft}',
    "saleToList" = '${propObj.saleToList}',
    "url" = '${propObj.url}'`;

    pool.query(queryStr, (err) => {
      if (err) {
        console.log("error", err);
        callback(err);
        return;
      }
      console.log('MADE IT TO DB!!');
      callback(null);
    });
  }
};