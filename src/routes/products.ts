import ProductController from "../controllers/ProductController";

import { Router } from "express";

const routes = Router();

routes.get("/", ProductController.index);
routes.post("/product", ProductController.store);
routes.delete("/produc:id", ProductController.delete);
routes.post("/products/user/:id", ProductController.listProductsByUserId);

export default routes;
