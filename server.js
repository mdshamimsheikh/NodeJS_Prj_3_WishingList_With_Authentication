import {app} from "./app.js";
import {dbConnect} from "./data/database.js";

dbConnect();

app.listen(process.env.PORT, (res, req) => {
    console.log(`Server is running... with port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
