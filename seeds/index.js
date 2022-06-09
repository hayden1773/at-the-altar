const sequelize = require("../config/connection")
const {User, City, Country, Invitation, Itinary, Venue} = require("../models")



// const countries = [
//     {
//         country_name: "Italy"
//     },
//     {
//         country_name: "Turkey"
//     },
// ]

// const cities = [
//     {
//         city_name: "Milan",
//         country_id:"1"
//     },
//     {
//         city_name: "Istanbul",
//         country_id:"2"
//     },
// ]

// const venues = [
//     {
//         venue_name: "Officine del Volo",
//         contact_phone: "444 444 4444",
//         city_id: "1",
//     },
//     {
//         venue_name: "Château Monfort",
//         contact_phone: "444 444 5555",
//         city_id: "1",
//     },
//     {
//         venue_name: "The Marmara Esma Sultan",
//         contact_phone: "333 444 5555",
//         city_id: "2",
//     },
// ]

const users = [
    {
        username: "seval",
        password: "password",
    },
    {
        username: "hayden",
        password: "hayden12",
    }

]

const feedSeed = async () => {
    await sequelize.sync({force:true})
    try{
        
//         await Country.bulkCreate(countries);
//         await City.bulkCreate(cities);
//         await Venue.bulkCreate(venues);
        await User.bulkCreate(users);
        process.exit(0);
    } catch (err){
        console.log(err);
    }
}

feedSeed()