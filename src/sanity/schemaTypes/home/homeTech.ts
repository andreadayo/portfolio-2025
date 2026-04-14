import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeTech",
  title: "Technologies",
  type: "document",
  fields: [
    { name: "dividerTitle", title: "Divider Title", type: "string" },
    defineField({
      name: "tech",
      title: "Tech",
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
        title: "Home Technologies Section",
      };
    },
  },
});
