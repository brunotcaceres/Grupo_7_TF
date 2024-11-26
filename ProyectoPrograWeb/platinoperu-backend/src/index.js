import { json } from "express";
import express from "express";
import { sequelize } from "./config/database.js";

const app = express();
app.use(json());

const PORT = 4000;

async function verifyAndSyncConexion() {
    try {
        await sequelize.authenticate();
        console.log("Conectado a BD satisfactoriamente");
        await sequelize.sync(/*{ force: true }*/);
    } catch (error) {
        console.log("Error: ", error);
    }
}

app.listen(PORT, () => {
    console.log(`Servidor conectado a puerto ${PORT}`);
    verifyAndSyncConexion();
})
