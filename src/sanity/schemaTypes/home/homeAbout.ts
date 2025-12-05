import { defineType } from "sanity";
import { richText } from "../blocks/richText";

export default defineType({
  name: "homeAbout",
  title: "About",
  type: "document",
  fields: [
    { name: "dividerTitle", title: "Divider Title", type: "string" },
    {
      name: "dividerButton",
      title: "Divider Button",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "path", title: "Path", type: "string" },
      ],
    },
    { name: "header", title: "Header", type: "string" },
    {
      name: "description",
      title: "About Description",
      type: "array",
      of: [richText],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Home About Section",
      };
    },
  },
});
