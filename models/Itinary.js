const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Itinary extends Model {}

Itinary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    venue_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "venue",
          key: "id",
        },
    },
  },
  {
    sequelize,
  }
);

module.exports = Itinary;
