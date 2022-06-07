const express = require("express");
const router = express.Router();
const { User, Itinary } = require("../models/");
const {withAuth} = require("../utils/tokenAuth")

//find all
router.get("/", async (req, res) => {
  try {
    const itinaryList = await Itinary.findAll();
    res.status(200).json(itinaryList);
  } catch (err) {
    res.status(500).json({ msg: "an error occured", err });
  }
});

//find by id
router.get("/:id", (req, res) => {
  Itinary.findByPk(req.params.id)
    .then((itinaryData) => {
      res.json(itinaryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/",withAuth, (req, res) => {
    Itinary.create({
        // venue_name:req.body.venue_name,
        // venue_picture:req.body.venue_picture,
        // contact_phone:req.body.contact_phone,

        day:req.body.day,
        UserId:req.user
    })
      .then((newItinary) => {
        res.json(newItinary);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

module.exports = router;