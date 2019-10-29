const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB config


// Connect to mongo db 
const uri = require("./config/keys").mongoURI;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('sono dentro'); 
  client.close();
});

//Use Routes
app.use("/api/items", items);

	
const port = process.env.PORT || 5000;

app.listen(port , () => console.log(`Server started on port ${port}`));
