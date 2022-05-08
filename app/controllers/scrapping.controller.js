const db = require("../models");
const Scrapping = db.scrappings;

// Retrieve all scrapping embeded data from the database.
exports.findAll = (req, res) => {
    Scrapping.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving scrappings data."
      });
    });
  
};

// Find a scrappings data with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Scrapping.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found scrappings with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving scrappings with id=" + id });
      });
  };

