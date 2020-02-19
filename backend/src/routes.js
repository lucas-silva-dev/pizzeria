import { Router } from "express";

import PizzaController from "./app/controllers/PizzaController";
import ItemController from "./app/controllers/ItemController";

const routes = new Router();

routes.post("/pizzas", PizzaController.store);

routes.put("/pizzas/:id", PizzaController.update);
routes.put("/pizzas/", PizzaController.update);

routes.get("/pizzas", PizzaController.index);
routes.get("/pizzas/pizza/", PizzaController.show);
routes.get("/pizzas/pizza/:id", PizzaController.show);

routes.delete("/pizzas/", PizzaController.delete);
routes.delete("/pizzas/:id", PizzaController.delete);

routes.post("/items", ItemController.store);

export default routes;
