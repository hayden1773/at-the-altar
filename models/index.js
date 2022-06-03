const User = require("./User");
//const City = require("./City");
//const Country = require("./Country");
const Invitation = require("./Invitation");
//const Venue = require("./Venue");
//const Itinary= require("./Itinary");

// Country.hasMany(City),
// City.belongsTo(Country),

// City.hasMany(Venue);
// Venue.belongsTo(City),

User.hasOne(Invitation),
Invitation.belongsTo(User),

// User.hasMany(Itinary, {foreignKey: "user_id"})
// Itinary.belongsTo(User)

module.exports = {
    User,
    //City,
    //Country,
    Invitation,
    //Venue,
    // Itinary,
}
