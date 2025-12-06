import { defineType } from "sanity";

export default defineType({
  name: "notFound",
  title: "Not Found",
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
    {
      name: "notFoundIcon",
      title: "Not Found Icon",
      type: "image",
      options: { hotspot: true },
    },
    { name: "header", title: "Header", type: "string" },
    { name: "submitButtonLabel", title: "Submit Button Label", type: "string" },
  ],

  preview: {
    prepare() {
      return {
        title: "Not Found",
      };
    },
  },
});
