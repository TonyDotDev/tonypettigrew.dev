import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { markdownSchema } from "sanity-plugin-markdown";

export default createConfig({
  name: "default",
  title: "tonypettigrew.dev",
  projectId: "vf3q59cl",
  dataset: "production",
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: [
      {
        name: "post",
        type: "document",
        title: "Post",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
            },
          },
          {
            name: "content",
            title: "Content",
            type: "markdown",
          },
          {
            name: "excerpt",
            title: "Excerpt",
            type: "string",
          },
          {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
          },
          {
            name: "date",
            title: "Date",
            type: "datetime",
          },
        ],
      },
      {
        name: "snippet",
        type: "document",
        title: "Snippet",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
            },
          },
          {
            name: "content",
            title: "Content",
            type: "markdown",
          },
          {
            name: "description",
            title: "Description",
            type: "string",
          },
          {
            name: "logo",
            title: "Logo",
            type: "image",
          },
          {
            name: "date",
            title: "Date",
            type: "datetime",
          },
          {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
          },
        ],
      },
      {
        name: "project",
        title: "Project",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
            },
          },
          {
            name: "company",
            title: "Company",
            type: "string",
          },
          {
            name: "description",
            title: "Description",
            type: "string",
          },
          {
            name: "isProfessional",
            title: "Professional",
            type: "boolean",
          },
          {
            name: "githubUrl",
            title: "Github Url",
            type: "url",
          },
          {
            name: "url",
            title: "Url",
            type: "url",
          },
          {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
          },
          {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: [{ type: "technology" }] }],
          },
        ],
      },
      {
        name: "category",
        title: "Category",
        type: "document",
        fields: [
          { name: "label", type: "string", title: "Label" },
          {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
              source: "label",
            },
          },
        ],
      },
      {
        name: "technology",
        title: "Technology",
        type: "document",
        fields: [
          { name: "label", type: "string", title: "Label" },
          {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
              source: "label",
            },
          },
        ],
      },
    ],
  },
});
