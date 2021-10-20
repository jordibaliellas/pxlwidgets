import NodeCache from "node-cache";
export const apiCache = new NodeCache({
  stdTTL: 60,
  checkperiod: 120,
  deleteOnExpire: true,
});
