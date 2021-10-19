import express from "express";
import NodeCache from "node-cache";
export const apiCache = new NodeCache({
  stdTTL: 60,
  checkperiod: 120,
  deleteOnExpire: true,
});

export const cacheMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.originalUrl);
  const result = apiCache.get(req.originalUrl);
  if (result) return res.json(result).end();
  next();
};
