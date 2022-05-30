'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_CS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor_CS.init({
    doctorId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor_CS',
  });
  return Doctor_CS;
};