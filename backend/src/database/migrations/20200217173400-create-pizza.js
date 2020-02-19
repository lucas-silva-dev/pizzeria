module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pizzas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
      },
      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
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
    return queryInterface.dropTable("pizzas");
  }
};
