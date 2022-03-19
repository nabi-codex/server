'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorCategory extends Model {

    static associate(models) {

    }
  }

  VendorCategory.init({
    name: {
      type: DataTypes.STRING(145),
    },
  }, {
    sequelize,
    modelName: 'vendorCategory',
    tableName: 'vendorCategory',
  });
  return VendorCategory;
};