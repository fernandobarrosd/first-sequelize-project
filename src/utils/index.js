import { DataTypes } from "sequelize"

export const createIdColumn = () => {
    return {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}