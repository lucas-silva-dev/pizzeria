import Sequelize, { Model } from "sequelize";

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        pizza_id: Sequelize.INTEGER,
        quantity: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: "order_id", as: "orders" });
  }
}

export default Item;
