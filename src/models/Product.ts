import { DataTypes } from "sequelize";
import db from "../config/database";

export const Product = db.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
