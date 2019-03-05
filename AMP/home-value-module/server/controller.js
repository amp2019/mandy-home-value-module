const model = require('./model.js');

module.exports = {
  handleAllPropertyData: (req, res) => {
    model.fetchAllPropertyData((err, data) => {
      if (err) {
        console.log('error GET request from the controller');
        return;
      }
      console.log('!!!!! Getting all FROM controller ');
      res.send(data);
    });
  },
  handleSinglePropertyData: (req, res) => {
    var propertyId = req.params.propertyId;
    model.fetchSinglePropertyData(propertyId, (err, data) => {
      if (err) {
        console.log('error fetching propertyData');
      }
      console.log('FROM CONTROLLER ', data);
      res.send(data);
    });
  },
  handleSinglePost: (request, response) => {
    var propObj = request.body;
    model.postSingleProperty(propObj, (err) => {
      if (err) {
        console.log('ERR trying to post', err);
        response.status(400).send();
      }
      console.log('POSTED!!!');
      response.status(201).send();
    });
  },
  handleDelete: (request, response) => {
    var propId = request.params.propertyId;
    model.deleteSingleProperty(propId, (err, data) => {
      if (err) {
        console.log('ERR trying to delete', err);
        response.status(400).send();
      }
      console.log('DELETED ', propId);
      response.send(data);
    });
  },
  handleUpdate: (request, response) => {
    var propObj = request.body;
    model.updateSingleProperty(propObj, (err, data) => {
      if (err) {
        console.log('ERR trying to update', err);
        response.status(400).send();
      }
      console.log('Updated record!');
      response.status(202).send(data);
    });
  }
};
