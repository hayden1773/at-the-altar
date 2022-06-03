const express = require("express");
const router = express.Router();
const { User, Invitation } = require("../models");
const {withAuth} = require("../utils/tokenAuth")


router.get("/", (req, res) => {
  Invitation.findAll()
    .then((invitation) => {
      res.json(invitation);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete("/:id", withAuth,(req, res) => {
    Invitation.destroy({
      where: {
        id: req.params.id,
        UserId:req.user
      },
    })
      .then((delInvitation) => {
        if (!delInvitation) {
          return res.status(404).json({ msg: "no such game" });
        }
        res.json(delInvitation);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

module.exports = router;