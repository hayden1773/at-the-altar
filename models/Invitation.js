const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Invitation extends Model {}

Invitation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // user_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: "User",
    //     key: "id",
    //   },
    // },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    couple_avatar: {
      type: DataTypes.STRING,
      Unique: true,
    },
    venue_picture: {
      type: DataTypes.STRING,
      Unique: true,
    },

    wedding_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    hotel_tobook: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Invitee_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },

    invitee_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Invitation;
