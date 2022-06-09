const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Hotel extends Model {}

Hotel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    hotel_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },
    // hotel_picture: {
    //     type: DataTypes.STRING,
    //     Unique: true,
    //   },
    hotel_address: {
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
    
  },
  {
    sequelize,

  }
);

module.exports = Hotel;
