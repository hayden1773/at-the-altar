const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const venueRoutes = require("./venueRoutes");
router.use("/api/venues",venueRoutes)

const countryRoutes = require("./countryRoutes");
router.use("/api/venues",countryRoutes)

const cityRoutes = require("./cityRoutes");
router.use("/api/venues",cityRoutes)

module.exports = router;