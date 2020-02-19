import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import Pizza from "../app/models/Pizza";
import Order from "../app/models/Order";
import Item from "../app/models/Item";

const models = [Pizza, Order, Item];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
