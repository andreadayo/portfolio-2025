import { defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    { name: "dividerTitle", title: "Divider Title", type: "string" },
    { name: "marqueeText", title: "Marquee Text", type: "string" },
    {
      name: "marqueeIcon",
      title: "Marquee Icon",
      type: "image",
      options: { hotspot: true },
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Projects",
      };
    },
  },
});
