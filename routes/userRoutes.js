const express = require('express');
const router = express.Router();
const {User, Venue} = require("../models/");
//const bcrypt  = require("bcrypt");

//find all
router.get('/', async (req, res) => {
    try {
      const wedUser = await User.findAll(
      //   {
      //   include: [{ model: Venue }]
      // }
      );
      res.status(200).json(wedUser);
    } catch (err) {
      res.status(500).json({ msg: "an error occured", err });
    }
  });

  router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
  })

  //find one
  router.get("/:id", (req, res) => {
    User.findByPk(req.params.id,{})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  //create a user
  router.post("/", (req, res) => {
    User.create(req.body)
      .then(newUser => {
        req.session.user = {
          id:newUser.id,
          username:newUser.username
        }
        res.json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/login", (req, res) => {
    User.findOne({
      where:{
      username:req.body.username
    }
  }).then(foundUser=>{
      if(!foundUser){
        return res.status(400).json({msg:"wrong login credentials"})
      }
      if(bcrypt.compareSync(req.body.password,foundUser.password)){
        req.session.user = {
          id:foundUser.id,
          username:foundUser.username
        }
        return res.json(foundUser)
      } else {
        return res.status(400).json({msg:"wrong login credentials"})
      }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
//update an user 
  router.put("/", (req, res) => {
    console.log(req.session)
    User.update(req.body, {
      where: {
        id: req.session.user.id
      }
    }).then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

    router.delete("/:id", (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(delUser => {
      res.json(delUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

  module.exports = router;
  
