const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    
    wedding_date: {
    type: DataTypes.DATE,
    allowNull: false,
    },
    event_duration: {
      type: DataTypes.INTEGER, 
    }
},
{
  sequelize,

}
);

module.exports = Event;