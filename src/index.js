import express from "express";
import { Cliente } from "./models/Cliente";

const app = express();

app.get("/clientes", async (req, res) => {
    const clientes = await Cliente.findAll();
    return res.json(clientes);
})
app.listen(8190);