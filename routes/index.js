const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const venueRoutes = require("./venueRoutes");
router.use("/api/venues",venueRoutes)

const inviteRoutes = require("./inviteRoutes");
router.use("/api/invites",inviteRoutes)

const eventRoutes = require("./eventRoutes");
router.use("/api/events",eventRoutes)

const hotelRoutes = require("./hotelRoutes");
router.use("/api/hotels", hotelRoutes)

// const guestRoutes = require("./guestRoutes");
// router.use("/api/guests", guestRoutes);

module.exports = router;