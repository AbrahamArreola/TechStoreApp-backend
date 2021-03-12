import app from "./config/config";
import db from "./config/database";
import router from "./routes";


const port = app.get("port");

db.sync()
    .then(() => "Database is connected!")
    .catch((err) => console.log(err));

app.use(router);

app.listen(port, () => {
    console.log("Listening on port: ", port);
});
