const express = require('express');
const router = express.Router();
const {User, Venue, Hotel,Event} = require("../models");
const jwt = require("jsonwebtoken")
require("dotenv").config()
const {withAuth} = require("../utils/tokenAuth")


//find all

router.get('/', async (req, res) => {
    try {
      const wedEvent = await Event.findAll(
        {
        include: [{ model: Venue }, { model: Hotel }, { model: User }]
      }
      );
      res.status(200).json(wedEvent);
    } catch (err) {
      res.status(500).json({ msg: "an error occured", err });
    }
  });

  //find by id
router.get("/:id", (req, res) => {
  Event.findByPk(req.params.id)
    .then((eventData) => {
      res.json(eventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {

    console.log(req.user)
    Event.create({
       HotelId:req.body.HotelId,
       VenueId:req.body.VenueId,
       UserId:req.body.UserId,
       wedding_date:req.body.wedding_date,
       event_duration:req.body.event_duration
    })
    .then((newEvent) => {
      res.json(newEvent);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;