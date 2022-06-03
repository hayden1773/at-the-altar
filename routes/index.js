const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const venueRoutes = require("./venueRoutes");
router.use("/api/venues",venueRoutes)

const countryRoutes = require("./countryRoutes");
router.use("/api/countries",countryRoutes)

const cityRoutes = require("./cityRoutes");
router.use("/api/cities",cityRoutes)

module.exports = router;