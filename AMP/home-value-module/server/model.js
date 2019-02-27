const db = require('../database/db.js');

module.exports = {
  fetchAllPropertyData: (callback) => {
    db.readAllProperties((err, propertyData) => {
      if (err) {
        callback(err);
      }
      db.readAllComparableHomes((err, comparableHomesData) => {
        if (err) {
          callback(err);
          return;
        }
        db.readAllLocalHomes((err, localHomesData) => {
          if (err) {
            callback(err);
            return; 
          }
          var data = {
            propertyData: propertyData, 
            comparableHomesData: comparableHomesData,
            localHomesData: localHomesData,
          };
          console.log('fetched all of the data', data);
          callback(null, data); 
        });
      });
    });
  },
  fetchSinglePropertyData: (id, callback) => {
    db.readSingleProperty(id, (err, singlePropertyData) => {
      if (err) {
        callback(err);
        return;
      }
      // Grab the results of the query and clean
      console.log('single Propertyy!!!!', singlePropertyData);
      var singleProperty = {
        singlePropertyData: singlePropertyData
      };
      callback(null, singleProperty);
    });
  },
  postSingleProperty: (propObj, callback) => {
    db.saveAProperty(propObj, (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, data);
    });
  },
  deleteSingleProperty: (propId, callback) => {
    console.log('PROP ID ON MODEL SIDE ', propId);
    db.deleteAProperty(propId, (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, data);
    });
  }
};