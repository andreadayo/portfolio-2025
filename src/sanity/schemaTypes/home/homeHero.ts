import { defineType } from "sanity";

export default defineType({
  name: "homeHero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "helloIcon",
      title: "Hello Icon",
      type: "image",
      options: { hotspot: true },
    },
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
      name: "dividerIcon",
      title: "Divider Icon",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
});
