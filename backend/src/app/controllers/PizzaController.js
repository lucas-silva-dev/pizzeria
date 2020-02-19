import Pizza from "../models/Pizza";

class PizzaController {
  async store(req, res) {
    const { name } = req.body;
    const pizzaExists = await Pizza.findOne({
      where: { name }
    });

    if (pizzaExists) {
      return res
        .status(409)
        .json({ error: "This Pizza already exists on the menu" });
    }

    const { id, price, ingredients, available } = await Pizza.create(req.body);

    return res.json({ id, name, price, ingredients, available });
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.query;

    const pizzaId = await Pizza.findByPk(id);

    if (name !== undefined || "") {
      var pizzaName = await Pizza.findOne({
        where: { name }
      });
    }

    let pizza = "";

    pizzaId ? (pizza = pizzaId) : (pizza = pizzaName);

    if (!pizza) {
      return res.status(404).json({ error: "Pizza not found" });
    }

    await pizza.update(req.body);

    return res.json({ pizza });
  }

  async index(req, res) {
    const pizzas = await Pizza.findAll({
      attributes: ["id", "name", "price", "ingredients", "available"],
      order: ["id"]
    });

    return res.json({ pizzas });
  }

  async show(req, res) {
    const { id } = req.params;
    const { name } = req.query;

    const pizzaId = await Pizza.findByPk(id);

    if (name !== undefined || "") {
      var pizzaName = await Pizza.findOne({
        where: { name }
      });
    }

    let pizza = "";

    pizzaId ? (pizza = pizzaId) : (pizza = pizzaName);

    if (!pizza) {
      return res.status(404).json({ error: "Pizza not found" });
    }

    return res.json({ pizza });
  }

  async delete(req, res) {
    const { id } = req.params;
    const { name } = req.query;

    const pizzaId = await Pizza.findByPk(id);

    if (name !== undefined || "") {
      var pizzaName = await Pizza.findOne({
        where: { name }
      });
    }

    let pizza = "";

    pizzaId ? (pizza = pizzaId) : (pizza = pizzaName);

    if (!pizza) {
      return res.status(404).json({ error: "Pizza not found" });
    }

    await pizza.destroy();

    return res.json({ success: "Pizza successfully deleted" });
  }
}

export default new PizzaController();
