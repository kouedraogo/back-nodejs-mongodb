const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const mongoose = require('mongoose');

var corsOptions = {
  //origin: "http://localhost:8081"
  //origin: "http://parisevents.s3-website.eu-west-3.amazonaws.com"
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Paris Events application" });
});
/*
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'Event_db'
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
*/
//var mongoDbUrl = 'mongodb://superuser:motdepasse@127.0.0.1:27017'; //by default
var mongoDbUrl = 'mongodb+srv://abelardo:abelardo@parisevents.y38fe.mongodb.net/Event_db?retryWrites=true&w=majority'

// Conncection à la bdd mongodb, via mongoose
//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true, dbName:'Event_db'})
//mongoose.connect(mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true, dbName:'Event_db'})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
require("./app/routes/event.routes")(app);
require("./app/routes/scrapping.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});