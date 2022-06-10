const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Hotel extends Model { }


// HOTEL MODEL THAT SAVES UNDER ID
Hotel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // REQUESTS HOTEL NAME
    hotel_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },
    //  REQUESTS HOTEL ADDRESS
    hotel_address: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },
    // REQUESTS HOTEL PHONE NUMBER > MUST BE PHONE VALIDATED NUMBER FORMATTING > NOT INTERNATIONAL FORMATTING
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

module.exports = Hotel;
