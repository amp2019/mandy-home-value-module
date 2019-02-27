const model = require('./model.js');

module.exports = {
  handleAllPropertyData: (req, res) => {
    model.fetchAllPropertyData((err, data) => {
      if (err) {
        console.log('error GET request from the controller');
        return;
      }
      res.send(data);
    });
  },
  handleSinglePropertyData: (req, res) => {
    var propertyId = req.params.propertyId;
    model.fetchSinglePropertyData(propertyId, (err, data) => {
      if (err) {
        console.log('error fetching propertyData');
      }
      res.send(data);
    });
  }
}
