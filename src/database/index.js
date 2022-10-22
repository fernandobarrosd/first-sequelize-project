import { config } from "../config";
import { Sequelize } from "sequelize";


export const database = new Sequelize(config);

