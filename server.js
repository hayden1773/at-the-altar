const express = require("express");
const allRoutes = require("./routes");
const cors = require("cors");
const sequelize = require("./config/connection");


const app = express();

//DEVELOP MODE
app.use(cors());

//PROD MODE
// app.use(cors({
//   origin:"https://boardgames-front.herokuapp.com"
// }));


const PORT = process.env.PORT || 3000;

const { User, City, Country, Invitation, Itinary, Venue} = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});