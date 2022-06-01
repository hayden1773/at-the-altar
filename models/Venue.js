const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


class Venue extends Model {}

Venue.init({
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    venue_name: {
        type: DataTypes.STRING,
        allowNull: false,
        Unique: true
    },
    contact_phone: { 
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        validator: function(v) {
            const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/
            return phoneValidationRegex.test(v); 
        },
    }
},
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'country',
            key: 'id'
        }
    },
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'city',
            key: 'id'
        }
    },
},
  {
        sequelize,
  }
);

module.exports = Venue;
