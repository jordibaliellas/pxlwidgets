import express from "express";
import { cacheMiddleware } from "./middlewares/cache.middleware";
import { rijksmuseumRouter } from "./routes/rijksmuseum.router";
import cors from "cors";

export const router = express.Router();

router.use(cors());
router.use(cacheMiddleware);
router.use("/rijksmuseum", rijksmuseumRouter);
