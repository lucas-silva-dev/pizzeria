import Sequelize, { Model } from "sequelize";

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        item_id: [Sequelize.STRING],
        canceled_at: Sequelize.DATE
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Item, { foreignKey: "order_id", as: "items" });
  }
}

export default Order;
