import { defineType, defineField } from "sanity";
import { richText } from "../blocks/richText";

export default defineType({
  name: "aboutExperience",
  title: "Experience & Education",
  type: "document",
  fields: [
    {
      name: "experienceDividerTitle",
      title: "Experience Divider Title",
      type: "string",
    },
    {
      name: "experienceDividerButton",
      title: "Experience Divider Button",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "path", title: "Path", type: "string" },
      ],
    },
    {
      name: "experienceHeader",
      title: "Experience Header",
      type: "array",
      of: [richText],
    },
    {
      name: "educationDividerTitle",
      title: "Education Divider Title",
      type: "string",
    },
    {
      name: "educationHeader",
      title: "Education Header",
      type: "array",
      of: [richText],
    },

    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "object",
          name: "experienceItem",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Work Experience", value: "experience" },
                  { title: "Education", value: "education" },
                ],
                layout: "radio",
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "isShown",
              title: "Show This Item?",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "company",
              title: "Company / Institution",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "role",
              title: "Role",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "startDate",
              title: "Start Date",
              type: "string",
              description: "eg. Sep 2025",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "endDate",
              title: "End Date",
              type: "string",
              description: "eg. Sep 2025 or Present",
              validation: (Rule) => Rule.required(),
            },
          ],

          preview: {
            select: {
              type: "type",
              role: "role",
              company: "company",
              media: "icon",
              isShown: "isShown",
            },
            prepare({ type, role, company, media, isShown }) {
              return {
                title: `[${type === "experience" ? "Experience" : "Education"}] ${role}`,
                subtitle: isShown === false ? `${company} (hidden)` : company,
                media,
              };
            },
          },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "About Experience & Education Section",
      };
    },
  },
});
