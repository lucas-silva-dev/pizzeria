import Order from "../models/Order";

class OrderController {
  async store(req, res) {
    console.log(req.body);

    const order = await Order.create(req.body);

    return res.json({ order });
  }
}

export default new OrderController();
