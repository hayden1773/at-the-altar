const express = require("express");
const router = express.Router();
const { Venue, User, } = require("../models/");

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

router.post("/", (req, res) => {
    Venue.create({
        venue_name:req.body.venue_name,
        venue_picture:req.body.venue_picture,
        contact_phone:req.body.contact_phone,
        venue_address:req.body.venue_address,
    })
      .then((newVenue) => {
        res.json(newVenue);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.delete("/:id", (req, res) => {
    Venue.destroy({
      where: {
        id: req.params.id
      }
    }).then(delVenue => {
      res.json(delVenue);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

module.exports = router;