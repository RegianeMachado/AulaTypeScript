import IndexController from "../controllers/IndexController";

import { Router } from "express";

const routes = Router();

routes.get("/", IndexController.index);

export default routes;
