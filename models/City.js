const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class City extends Model {}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "country",
        key: "id",
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = City;
