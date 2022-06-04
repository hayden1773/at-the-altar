const User = require("./User");
const Hotel = require("./Hotel");
//const Country = require("./Country");
const Invite = require("./Invite");
const Venue = require("./Venue");
const Event = require("./Event")
//const Itinary= require("./Itinary");

User.hasMany(Event),
Event.belongsTo(User),

Hotel.hasMany(Event),
Event.belongsTo(Hotel),

Venue.hasMany(Event),
Event.belongsTo(Venue),

Event.hasMany(Invite),
Invite.belongsTo(Event),

// User.hasMany(Itinary, {foreignKey: "user_id"})
// Itinary.belongsTo(User)

module.exports = {
    User,
    Invite,
    Venue,
    Hotel,
    Event,
    // Itinary,
}
