const express = require("express");
const router = express.Router();
const { Hotel, User, Event} = require("../models/");

//find all
router.get("/", async (req, res) => {
  try {
    const hotelList = await Hotel.findAll();
    res.status(200).json(hotelList);
  } catch (err) {
    res.status(500).json({ msg: "an error occured", err });
  }
});

//find by id
router.get("/:id", (req, res) => {
  Hotel.findByPk(req.params.id, {
    include:[Event]
  })
    .then((hotelData) => {
      res.json(hotelData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {

    console.log(req.user)
    Hotel.create({
        hotel_name:req.body.hotel_name,
        venue_picture:req.body.venue_picture,
        contact_phone:req.body.contact_phone,
        hotel_address:req.body.hotel_address,
    })
      .then((newHotel) => {
        res.json(newHotel);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.delete("/:id", (req, res) => {
    Hotel.destroy({
      where: {
        id: req.params.id
      }
    }).then(delHotel => {
      res.json(delHotel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

module.exports = router;