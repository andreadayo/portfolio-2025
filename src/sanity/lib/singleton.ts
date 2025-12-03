import { client } from "./client";

export const getSingleton = async (type: string) => {
  return client.fetch(`*[_type == "${type}"][0]`);
};
