const express = require('express');
const router = express.Router();
const {User, Invite, Event} = require("../models");
const jwt = require("jsonwebtoken")
require("dotenv").config()
const {withAuth} = require("../utils/tokenAuth")


//find all

router.get('/', async (req, res) => {
    try {
      const wedInvite = await Invite.findAll(
      //   {
      //   include: [{ model: Venue }]
      // }
      );
      res.status(200).json(wedInvite);
    } catch (err) {
      res.status(500).json({ msg: "an error occured", err });
    }
  });

  //find by id
router.get("/:id", (req, res) => {
  Invite.findByPk(req.params.id, {
    include:[Event]
  })
    .then((inviteData) => {
      res.json(inviteData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {

  console.log("999999999")
    console.log(req.body)
    Invite.create({
        EventId:req.body.EventId,
        guest_name:req.body.guest_name,
        couple_avatar:req.body.couple_avatar,
        guest_email:req.body.guest_email,
        isAttending:req.body.isAttending,
    })
      .then((newInvite) => {
        res.json(newInvite);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

module.exports = router;

  