import { defineType } from "sanity";

export default defineType({
  name: "homeHero",
  title: "Hero",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "currentRole", title: "Current Role", type: "string" },
    { name: "location", title: "Location", type: "string" },
    {
      name: "dividerTitle",
      title: "Divider Title",
      type: "string",
      description: 'eg. "Welcome to my portfolio!"',
    },
    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    },
  ],
});
