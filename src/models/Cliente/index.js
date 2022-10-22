import { database } from "../../database";
import { DataTypes } from "sequelize";
import { createIdColumn } from "../../utils";

export const Cliente = database.define("cliente", {
    id: createIdColumn(),
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, { tableName: "cliente" })