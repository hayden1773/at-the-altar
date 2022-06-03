// const express = require("express");
// const router = express.Router();
// const { Venue, City, Country } = require("../models/");

// //find all
// router.get("/", async (req, res) => {
//   try {
//     const cityList = await City.findAll();
//     res.status(200).json(cityList);
//   } catch (err) {
//     res.status(500).json({ msg: "an error occured", err });
//   }
// });

// //find by id
// router.get("/:id", (req, res) => {
//   City.findByPk(req.params.id
//   //   , {
//   //   include: [{ model: Venue }],
//   // }
//   )
//     .then((cityData) => {
//       res.json(cityData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: "an error occured", err });
//     });
// });

// module.exports = router;