import { type SchemaTypeDefinition } from "sanity";
import homeAbout from "./home/homeAbout";
import homeHero from "./home/homeHero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeAbout, homeHero],
};
