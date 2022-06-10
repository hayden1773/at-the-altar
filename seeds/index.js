const sequelize = require("../config/connection")
const { User, City, Country, Invitation, Itinary, Venue } = require("../models")
const { options } = require("../routes")

// USER SEEDS
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
    await sequelize.sync({ force: true })
    try {

        await User.bulkCreate(users, { individualHooks: true });
        process.exit(0);
    } catch (err) {
        console.log(err);
    }
}

feedSeed()