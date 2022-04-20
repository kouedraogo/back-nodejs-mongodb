module.exports = app => {
    const events = require("../controllers/event.controller");
    var router = require("express").Router();

  // Retrieve all Paris Events
  router.get("/", events.findAll);

   // Retrieve a single Paris event with id
   router.get("/:id", events.findOne);

   app.use('/api/events', router);
};