import { defineType } from "sanity";
import { richText } from "../blocks/richText";

export default defineType({
  name: "aboutIntro",
  title: "Introduction",
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
    { name: "introDividerTitle", title: "Intro Divider Title", type: "string" },
    {
      name: "header",
      title: "Header",
      type: "array",
      of: [richText],
    },
    {
      name: "description",
      title: "About Description",
      type: "array",
      of: [richText],
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    },
  ],

  preview: {
    prepare() {
      return {
        title: "About Introduction Section",
      };
    },
  },
});
