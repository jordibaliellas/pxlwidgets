import got from "got";
import { URL } from "url";

export const get = (url: URL) => {
  return got.get(url);
};
