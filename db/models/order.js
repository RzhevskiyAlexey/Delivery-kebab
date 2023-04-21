'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.History, { foreignKey: 'user_id' });
    }
  }
  Order.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      img: DataTypes.STRING,
      location: DataTypes.TEXT,
      initial_price: DataTypes.INTEGER,
      sale: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
