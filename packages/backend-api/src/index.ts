import express from "express";
import { router } from "./router";
const app = express();
const port = 8080;

app.use(router);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
