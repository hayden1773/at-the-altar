const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Invite extends Model { }

// INVITATION MODEL REQUEST
Invite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // SAVES UNDER PICTURE OF COUPLE
    couple_avatar: {
      type: DataTypes.STRING,
    },

    // NAME FOR INVITED GUEST
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
    },
    // GUEST EMAIL > LINKED TO EMAIL.JS FOR SENDING 
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
