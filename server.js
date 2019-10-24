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

// Use connect method to connect to the server
const uri = "mongodb+srv://pietro:pietro@firstmernproject-ky9he.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
	
const port = process.env.PORT || 5000;

app.listen(port , 
		   () => console.log(`Server started on port ${port}`)
		  );
