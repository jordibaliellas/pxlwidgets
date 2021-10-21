import express from "express";
import { URLSearchParams } from "url";
import { forwardRijksmuseumApi } from "../controllers/rijksmuseum.controller";
import { apiCache } from "../infra/cache";

export const rijksmuseumRouter = express.Router();

rijksmuseumRouter.get("**", async (req, res) => {
  const originalPath = req.originalUrl;
  const currentPath = req.path;

  const queryParams = new URLSearchParams();
  Object.entries(req.query).forEach(([key, value]) => {
    queryParams.set(key, value?.toString() || "");
  });

  const pathAndQuery = `${currentPath}?${queryParams.toString()}`;

  const result = await forwardRijksmuseumApi(pathAndQuery);
  apiCache.set(originalPath, result);
  return res.json(result).end();
});
