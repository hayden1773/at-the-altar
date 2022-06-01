const User = require("./User");
const City = require("./City");
const Country = require("./Country");
const Invitation = require("./Invitation");
const Venue = require("./Venue");
const Itinary= require("./Itinary");

User.hasMany(Venue,{foreignKey: "user_id"}),
Venue.hasMany(User),

Country.hasMany(City,{foreignKey: "country_id"}),
City.belongsTo(Country),

City.hasMany(Venue,{foreignKey: "city_id"});
Venue.belongsTo(City),

User.belongsTo(Invitation,{foreignKey: "user_id"}),
Invitation.belongsTo(User),

User.hasMany(Itinary, {foreignKey: "user_id"})
Itinary.belongsTo(User)

module.exports = {
    User,
    Country,
    City,
    Invitation,
    Venue,
    Itinary,
}
