import express from "express";
import indexRoutes from "./routes";
import userRoutes from "./routes/user";
import productsRoutes from "./routes/products";
import authRoutes from "./routes/auth";

const app = express();

app.use(indexRoutes);
app.use(userRoutes);
app.use(productsRoutes);
app.use(authRoutes);

app.listen(3000, () => console.log("Funciona"));
