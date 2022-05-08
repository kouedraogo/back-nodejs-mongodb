module.exports = app => {
 const scrappings = require("../controllers/scrapping.controller");
 var router = require("express").Router();

// Retrieve all scrappings data
router.get("/", scrappings.findAll);

// Retrieve a single scrappings data with id
router.get("/:id", scrappings.findOne);

app.use('/api/scrappings', router);

};