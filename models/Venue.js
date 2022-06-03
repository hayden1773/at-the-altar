const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Venue extends Model {}

Venue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validator: function (v) {
          const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/;
          return phoneValidationRegex.test(v);
        },
      },
    },
    // city_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "City",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,

  }
);

module.exports = Venue;
