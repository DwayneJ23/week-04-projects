// This line imports the express library
const express = require('express');

// This initializes the web app HTTP server
const app = express();

// dot forward slash means it is a local file ./
const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

// console.log(zipdb.byCity);

// Handle any GET request for the '/' (root) path
app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

// Use a route parameter to hold the zipcode value
app.get('/zip/:zipcode', (req, res) => {
  // fill in...

  const records = zipdb.byZip[req.params.zipcode];
  	if(records === undefined) {
  		res.sendStatus(404);
  	} else {
  		res.json(records);
  	}
});

// Use a route parameter to hold the cityname value
app.get('/city/:cityname', (req, res) => {
  // fill in...

  const records = zipdb.byCity[req.params.cityname];
    if(records === undefined) {
      res.sendStatus(404);
    } else {
      res.json(records);
    }
});


// Start listening for HTTP requests on port 8000
app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
