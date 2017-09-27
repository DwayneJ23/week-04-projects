const express = require ('express');
const app = express(); 

// Handle any GET request for the '/' (root) path
app.get('/', (req, res) => {
	res.send('Hello World');
});

// Handle any GET request for the '/ctp' path
app.get('/ctp', (req, res) => {
	res.sendStatus(404).send('Hello CTP students');
});

//Starts the server..start listening to users on port 8000
app.listen(8000, () => {
	console.log('App Server started!');
});