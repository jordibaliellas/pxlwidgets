import express from "express";
import { cacheMiddleware } from "./middlewares/cache.middleware";
import { rijksmuseumRouter } from "./routes/rijksmuseum.router";

export const router = express.Router();

router.use(cacheMiddleware);
router.use("/rijksmuseum", rijksmuseumRouter);
