const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users", userRoutes)

const venueRoutes = require("./venueRoutes");
router.use("/api/venues", venueRoutes)

const invitationRoutes = require("./invitationRoutes");
router.use("/api/invites", invitationRoutes)

const eventRoutes = require("./eventRoutes");
router.use("/api/events", eventRoutes)

const hotelRoutes = require("./hotelRoutes");
router.use("/api/hotels", hotelRoutes)


module.exports = router;