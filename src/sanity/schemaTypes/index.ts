import { type SchemaTypeDefinition } from "sanity";
import navLinks from "./nav/navLinks";
import homeAbout from "./home/homeAbout";
import homeHero from "./home/homeHero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navLinks, homeAbout, homeHero],
};
