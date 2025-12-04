import { defineType, defineField } from "sanity";

export default defineType({
  name: "navLinks",
  title: "Navigation Links",
  type: "document",
  fields: [
    { name: "status", title: "Status", type: "string" },
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "path",
              title: "Path",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {},
    prepare() {
      return {
        title: "Navigation Links",
        subtitle: "Editable menu items",
      };
    },
  },
});
