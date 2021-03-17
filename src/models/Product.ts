import { DataTypes, Model } from "sequelize";
import db from "../config/database";

interface IProduct extends Model {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}

export default () => {
    return db.define<IProduct>("product", {
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
};
