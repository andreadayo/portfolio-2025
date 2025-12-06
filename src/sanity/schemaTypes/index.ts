import { type SchemaTypeDefinition } from "sanity";
import navLinks from "./nav/navLinks";
import homeAbout from "./home/homeAbout";
import homeHero from "./home/homeHero";
import homeTech from "./home/homeTech";
import aboutIntro from "./about/aboutIntro";
import footer from "./footer/footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navLinks, homeAbout, homeHero, homeTech, aboutIntro, footer],
};
