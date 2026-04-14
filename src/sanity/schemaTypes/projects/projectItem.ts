import { defineType } from "sanity";
import { richText } from "../blocks/richText";

export default defineType({
  name: "projectItem",
  title: "Project Item",
  type: "document",
  fields: [
    {
      name: "isShown",
      title: "Show This Project?",
      type: "boolean",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isFeatured",
      title: "Feature This Project?",
      type: "boolean",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Design", value: "design" },
          { title: "Playground", value: "playground" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projectSlug",
      title: "Project Slug",
      type: "slug",
      options: { source: "projectTitle" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "briefDescription",
      title: "Brief Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date Launched",
      type: "string",
      description: "e.g., Sep 2025",
    },
    {
      name: "tech",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "figmaLink", title: "Figma Link", type: "url" },
    { name: "githubLink", title: "GitHub Link", type: "url" },
    { name: "demoLink", title: "Demo Link", type: "url" },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "array",
      of: [richText],
    },
    {
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      type: "type",
      projectTitle: "projectTitle",
      featuredImage: "featuredImage",
    },
    prepare({ type, projectTitle, featuredImage }) {
      return {
        title: projectTitle,
        subtitle: type,
        media: featuredImage,
      };
    },
  },
});
