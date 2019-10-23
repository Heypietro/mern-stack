const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to mongo db 

// Database Name
const dbName = 'test';

// Use connect method to connect to the server
MongoClient.connect(db, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
	
const port = process.env.PORT || 5000;

app.listen(port , 
		   () => console.log(`Server started on port ${port}`)
		  );
