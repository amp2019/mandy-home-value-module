const mongoose = require('mongoose');
var faker = require('faker');
// mongoose.connect('mongodb+srv://john:zillowtalk@zillow-talk-db-ujzgi.mongodb.net/test?retryWrites=true');
mongoose.connect('mongodb://localhost/homes');

// Initialize mongodb schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Create db schema for properties
let propertySchema = new Schema({
  id: Number,
  zestimationPrice: String,
  startPriceRange: String,
  endPriceRange: String,
  thirtyDayPriceChange: String,
  oneYearForcast: String,
  propertyLastSalePrice: String, 
  propertLastSaleDate: String,
  comparableHomePrice: String,
  marketAppreciationPrice: String,
  localSalesAvg: String,
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  saleToList: Number,
  url: String
});

let comparableHomes = new Schema({
  id: Number,
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  url: String
});

let localHomes = new Schema({
  id: Number,
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  saleToList: Number,
  url: String
});

// Accessing the models for each schema
let Property = mongoose.model('Property', propertySchema);
let ComparableHomes = mongoose.model('ComparableHomes', comparableHomes);
let LocalHomes = mongoose.model('LocalHomes', localHomes);

// Query to grab data for all properties 
module.exports = {
  readAllProperties: (callback) => {
    Property.find((err, data) => {
      callback(err, data);
    }).setOptions({
      limit: 99
    });
  }, 
  // Query to grab data for comparableHomes 
  readAllComparableHomes: (callback) => {
    let query = ComparableHomes.aggregate([{$sample: {size: 10}}]);
    query.exec( (err, data) => {
      if (err) {
        console.log('DB err', err);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }, 
  // Query to grab data for localhomes 
  readAllLocalHomes: (callback) => {
    let query = LocalHomes.aggregate([{$sample: {size: 10}}]);
    query.exec( (err, data) => {
      if (err) {
        console.log('DB err', err);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  // Query to grab data from a single property 
  readSingleProperty: (id, callback) => {
    Property.find({id}, (err, data) => {
      callback(err, data);
    });
  },
  // finds home property by ID, if already exists, update all fields
  // else create a new entry
  saveAProperty: (propObj, callback) => {
    let query = Property.findOneAndUpdate({id: propObj.id}, {
      zestimationPrice: propObj.zestimationPrice,
      startPriceRange: propObj.startPriceRange,
      endPriceRange: propObj.endPriceRange,
      thirtyDayPriceChange: propObj.thirtyDayPriceChange,
      oneYearForcast: propObj.oneYearForcast,
      propertyLastSalePrice: propObj.propertyLastSalePrice, 
      propertLastSaleDate: propObj.propertLastSaleDate,
      comparableHomePrice: propObj.comparableHomePrice,
      marketAppreciationPrice: propObj.marketAppreciationPrice,
      localSalesAvg: propObj.localSalesAvg,
      sellDate: propObj.sellDate, 
      sellPrice: propObj.sellPrice,
      beds: propObj.beds, 
      baths: propObj.baths,
      sqft: propObj.sqft, 
      streetAddress: propObj.streetAddress, 
      priceSqft: propObj.priceSqft,
      saleToList: propObj.saleToList,
      url: propObj.url,
    }, {upsert: true});
    query.exec( (err, data) => {
      if (err) {
        console.log('DB err', err);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  deleteAProperty: (propId, callback) => {
    let query = Property.findOneAndDelete({id: propId});
    query.exec( (err, data) => {
      if (err) {
        console.log('ERR ON DELETE', err);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  updateAProperty: (propObj, callback) => {
    let query = Property.findOneAndUpdate({id: propObj.id}, {
      zestimationPrice: propObj.zestimationPrice,
      startPriceRange: propObj.startPriceRange,
      endPriceRange: propObj.endPriceRange,
      thirtyDayPriceChange: propObj.thirtyDayPriceChange,
      oneYearForcast: propObj.oneYearForcast,
      propertyLastSalePrice: propObj.propertyLastSalePrice, 
      propertLastSaleDate: propObj.propertLastSaleDate,
      comparableHomePrice: propObj.comparableHomePrice,
      marketAppreciationPrice: propObj.marketAppreciationPrice,
      localSalesAvg: propObj.localSalesAvg,
      sellDate: propObj.sellDate, 
      sellPrice: propObj.sellPrice,
      beds: propObj.beds, 
      baths: propObj.baths,
      sqft: propObj.sqft, 
      streetAddress: propObj.streetAddress, 
      priceSqft: propObj.priceSqft,
      saleToList: propObj.saleToList,
      url: propObj.url,
    }, {upsert: true});
    query.exec( (err, data) => {
      if (err) {
        console.log('DB err', err);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};