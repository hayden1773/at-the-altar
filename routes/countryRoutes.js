const express = require("express");
const router = express.Router();
const { Venue, City, Country } = require("../models/");

//find all
router.get("/", async (req, res) => {
  try {
    const countryList = await Country.findAll();
    res.status(200).json(countryList);
  } catch (err) {
    res.status(500).json({ msg: "an error occured", err });
  }
});

//find by id
router.get("/:id", (req, res) => {
  Country.findByPk(req.params.id, {
    include: [{ model: City }, {model: Venue}],
  })
    .then((countryData) => {
      res.json(countryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;