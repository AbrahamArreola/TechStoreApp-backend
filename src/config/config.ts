import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.set("port", process.env.PORT || 8000);

export default app;
