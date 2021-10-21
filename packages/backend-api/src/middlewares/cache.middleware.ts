import express from "express";
import { apiCache } from "../infra/cache";

export const cacheMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const result = apiCache.get(req.originalUrl);
  if (result) return res.json(result).end();
  next();
};
