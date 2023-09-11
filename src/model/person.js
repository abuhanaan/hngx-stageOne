const Sequelize = require("sequelize");
const sequelize = require("../db/connect");

const Person = sequelize.define("person", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  uniqueId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Person;
