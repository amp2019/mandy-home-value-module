// for mongo
const db = require('../database/db.js');

// for postgresql
// const db = require('../database/db_sql.js');

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
    db.deleteAProperty(propId, (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, data);
    });
  },
  updateSingleProperty: (propObj, callback) => {
    db.updateAProperty(propObj, (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, data);
    });
  }
};