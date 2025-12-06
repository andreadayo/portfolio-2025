import { defineType } from "sanity";
import { richText } from "../blocks/richText";

export default defineType({
  name: "contact",
  title: "Contact",
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
    { name: "header", title: "Header", type: "string" },
    {
      name: "description",
      title: "About Description",
      type: "array",
      of: [richText],
    },
    {
      name: "formName",
      title: "Form Name",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "placeholder", title: "Placeholder", type: "string" },
      ],
    },
    {
      name: "formEmail",
      title: "Form Name",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "placeholder", title: "Placeholder", type: "string" },
      ],
    },
    {
      name: "formMessage",
      title: "Form Message",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "placeholder", title: "Placeholder", type: "string" },
      ],
    },
    { name: "submitButtonLabel", title: "Submit Button Label", type: "string" },
  ],

  preview: {
    prepare() {
      return {
        title: "Contact",
      };
    },
  },
});
