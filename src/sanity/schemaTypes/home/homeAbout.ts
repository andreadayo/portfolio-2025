import { defineType } from "sanity";

export default defineType({
  name: "homeAbout",
  title: "About",
  type: "document",
  fields: [
    { name: "title", title: "About Title", type: "string" },
    {
      name: "description",
      title: "About Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
