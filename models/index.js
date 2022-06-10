const User = require("./User");
const Hotel = require("./Hotel");
const Invite = require("./Invite");
const Venue = require("./Venue");
const Event = require("./Event")



// RELATIONSHIPS BETWEEN TABLES
User.hasMany(Event),
    Event.belongsTo(User),

    Hotel.hasMany(Event),
    Event.belongsTo(Hotel),

    Venue.hasMany(Event),
    Event.belongsTo(Venue),

    Event.hasMany(Invite),
    Invite.belongsTo(Event),



    module.exports = {
        User,
        Invite,
        Venue,
        Hotel,
        Event,

    }
