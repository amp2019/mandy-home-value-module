# GET Setup Details for Proxy on EC2

```
Clients per second: 500
Duration: 1 minute
Timeout: 10 sec
Error Threshold: 50%
URL: /api/properties/%{*:0-1000000}
```

# GET Results

```
Average response time: 2378 ms
Duration: 1m
Successful responses: 16296	
Data sent by Loader: 2.88 MB
Received: 17.04 MB

Average error rate: 1.8%
Timeout: 535
```

# POST Setup Details for Proxy

```
Clients per second: 200
Duration: 1 minute
Timeout: 10 sec
Error Threshold: 50%
URL: /post
```

# POST results

```
Average response time: 53 ms
Duration: 1m
Successful responses: 11952	
Data sent by Loader: 10.36 MB
Received: 4.46 MB

Average error rate: 0%
Timeout: 0
```

# Proxy Server File

```
require('newrelic');
const request = require('request');
const proxy = require('http-proxy-middleware');
const express = require ('express');
const path = require('path');

const app = express();
const port = 3000; 

app.use('/', express.static(path.join(__dirname, '../client')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:propertyId', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.delete('/delete/:propertyId', (request, response) => {
  let id = request.params.propertyId;
  console.log('HIT DELETE REDIRECT', id );
  response.redirect(303, 'http://ec2-18-224-213-209.us-east-2.compute.amazonaws.com/delete/request.params.propertyId');
});

const myProxy = proxy(['/post', '/update', '/api/properties'], {
  target: 'http://ec2-18-224-213-209.us-east-2.compute.amazonaws.com',
  changeOrigin: true,
  xfwd: true
});

app.use(myProxy);


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
```