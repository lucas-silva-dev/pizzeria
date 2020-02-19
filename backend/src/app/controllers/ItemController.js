import Item from "../models/Item";

class ItemController {
  async store(req, res) {
    return res.json({ message: "ok" });
  }
}

export default new ItemController();
