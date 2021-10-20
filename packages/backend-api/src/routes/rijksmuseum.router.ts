import express from "express";
import { forwardRijksmuseumApi } from "../controllers/rijksmuseum.controller";
import { apiCache } from "../infra/cache";

export const rijksmuseumRouter = express.Router();

rijksmuseumRouter.get("**", async (req, res) => {
  const originalPath = req.originalUrl;
  const currentPath = req.path;
  const result = await forwardRijksmuseumApi(currentPath);
  apiCache.set(originalPath, result);
  return res.json(result).end();
});
