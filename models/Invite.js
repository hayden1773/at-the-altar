const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Invite extends Model {}

Invite.init(
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
    // venue_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    // duration: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },

    couple_avatar: {
      type: DataTypes.STRING,
    },

    // hotel_tobook: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },

    guest_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      isEmail: true,
      },
    },

    isAttending: {
      type: DataTypes.ENUM("notResponded", "Yes", "No"),
    },
  },
  {
    sequelize,
  }
);

module.exports = Invite;
