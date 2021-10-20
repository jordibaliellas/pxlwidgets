import { get } from "../infra/http";
import { URL } from "url";
import { config } from "../config";

export const forwardRijksmuseumApi = async (path: string) => {
  try {
    const rijksmuseumApi = config.rijksmuseumApi;
    const url = new URL(rijksmuseumApi + path);

    url.searchParams.set("key", config.rijksmuseumApiKey);

    const result = await get(url);
    const body = JSON.parse(result.body);

    return body;
  } catch (err) {
    console.log("Error getting data from rijksmuseumApi");
    console.log("Error: ", err);
    throw err;
  }
};
