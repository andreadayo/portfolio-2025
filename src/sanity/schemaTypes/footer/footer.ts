import { defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    { name: "dividerTitle", title: "Divider Title", type: "string" },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "ctaText", title: "CTA Text", type: "text" },
    { name: "email", title: "Email", type: "email" },
    {
      name: "emailIcon",
      title: "Email Icon",
      type: "image",
      options: { hotspot: true },
    },
    { name: "leftTitle", title: "Left Column Title", type: "string" },
    {
      name: "footerLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "navLink",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "path", title: "Path", type: "string" },
          ],
        },
      ],
    },
    { name: "rightTitle", title: "Right Column Title", type: "string" },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "path", title: "Path", type: "string" },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {},
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
