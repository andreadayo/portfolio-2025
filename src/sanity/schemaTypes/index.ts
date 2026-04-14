import { type SchemaTypeDefinition } from "sanity";
import navLinks from "./nav/navLinks";
import homeAbout from "./home/homeAbout";
import homeHero from "./home/homeHero";
import homeTech from "./home/homeTech";
import aboutIntro from "./about/aboutIntro";
import aboutApproach from "./about/aboutApproach";
import aboutExperience from "./about/aboutExperience";
import projects from "./projects/projects";
import projectItem from "./projects/projectItem";
import contact from "./contact/contact";
import footer from "./footer/footer";
import notFound from "./not-found/not-found";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navLinks,
    homeAbout,
    homeHero,
    homeTech,
    aboutIntro,
    aboutApproach,
    aboutExperience,
    projects,
    projectItem,
    contact,
    footer,
    notFound,
  ],
};
