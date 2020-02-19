module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("items", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "orders", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      pizza_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "pizzas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      canceled_at: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("items");
  }
};
