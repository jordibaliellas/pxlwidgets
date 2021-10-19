import express from "express";
import { cacheMiddleware, apiCache } from "./middlewares/cache.middleware";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.use("/api", cacheMiddleware);
app.get("/api/1", (req, res) => {
  console.log("GEEEET");
  const result = { test: "test" };
  res.json({ test: "test" }).end();
  apiCache.set(req.originalUrl, result);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
