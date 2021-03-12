import { Sequelize } from "sequelize";

const dbHost: string = process.env.HOST || "localhost";
const dbName: string = process.env.DB_NAME || "tech_storeDB";
const dbUsername: string = process.env.DB_USERNAME || "root";
const dbPassword: string = process.env.DB_PASSWORD || "";

const db = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: "mysql",
});

export default db;
