const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Venue extends Model { }

// VENUE MODEL REQUEST
Venue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // NAME OF VENUE
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },
    // PICTURE OF VENUE
    venue_picture: {
      type: DataTypes.STRING,
      Unique: true,
    },
    venue_address: {
      type: DataTypes.STRING,
    },
    // VENUE PHONE NUMBER > NOT FOR INTERNATION USE
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

  },
  {
    sequelize,

  }
);

module.exports = Venue;
