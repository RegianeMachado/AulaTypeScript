import UserController from "../controllers/UserController";

import { Router } from "express";

const routes = Router();

routes.get("/");
routes.post("/", UserController.store);
routes.put("/:id", UserController.update);

export default routes;
