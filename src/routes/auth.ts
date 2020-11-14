import AuthController from "../controllers/AuthController";

import { Router } from "express";

const routes = Router();

routes.get("/", AuthController.index);

export default routes;
