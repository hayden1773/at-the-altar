const express = require("express");
const router = express.Router();
const { Venue, User, City, Country } = require("../models/");

//find all
router.get("/", async (req, res) => {
  try {
    const venueList = await Venue.findAll();
    res.status(200).json(venueList);
  } catch (err) {
    res.status(500).json({ msg: "an error occured", err });
  }
});

//find by id
router.get("/:id", (req, res) => {
  Venue.findByPk(req.params.id)
    .then((venueData) => {
      res.json(venueData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;