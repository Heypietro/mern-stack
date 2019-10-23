const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to mongo db
mongoose
	.connect(db);
	//.then(() => console.log("MongoDB connected.."))
	//.catch(err => console.log(err));
	
var MyModel = mongoose.model('Test', new Schema({ name: String }));
// Works
MyModel.findOne((error, result) => {
	console.log(`This is error ${error}`);
	console.log(`This is the result ${result}`);
});
	
const port = process.env.PORT || 5000;

app.listen(port , 
		   () => console.log(`Server started on port ${port}`)
		  );
