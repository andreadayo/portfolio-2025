import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutApproach",
  title: "Approach",
  type: "document",
  fields: [
    { name: "dividerTitle", title: "Divider Title", type: "string" },
    defineField({
      name: "approach",
      title: "Approach",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "header",
              title: "Header",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],

  preview: {
    select: {},
    prepare() {
      return {
        title: "About Approach Section",
      };
    },
  },
});
