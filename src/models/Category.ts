import { DataTypes, Model } from "sequelize";
import db from "../config/database";

interface ICategory extends Model{
    id: number;
    name: string;
}

export default () => {
    return db.define<ICategory>("category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
