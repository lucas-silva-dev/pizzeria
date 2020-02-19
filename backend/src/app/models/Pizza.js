import Sequelize, { Model } from "sequelize";

class Pizza extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.FLOAT,
        ingredients: [Sequelize.TEXT],
        available: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Pizza;
