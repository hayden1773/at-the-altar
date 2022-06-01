const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Invitation extends Model {}

Invitation.init({
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        Unique: true
    },

    Invitee_name: {
        type: DataTypes.STRING,
        allowNull: false,
        Unique: true
    },

    invitee_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
},
  {
    sequelize,
  }
);

module.exports = Invitation;
