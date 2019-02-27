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
  },
  handleSinglePost: (request, response) => {
    var propId = request.params.propertyId;
    console.log('PROP ID IN CONTROLLER', propId);
    var propObj = {id: Number(propId),       
      zestimationPrice: '2,313,187',
      startPriceRange: '111,231',
      endPriceRange: '2,000,0000'
    };
    model.postSingleProperty(propObj, (err, data) => {
      if (err) {
        console.log('ERR trying to post', err);
        response.status(400).send();
      }
      console.log('POSTED!!!');
      response.status(201).send(data);
    });
  }
};
