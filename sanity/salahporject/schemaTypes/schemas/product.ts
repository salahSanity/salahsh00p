export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Pass", value: "pass" },
          { title: "Clothing", value: "clothing" },
          { title: "Accessory", value: "accessory" },
          { title: "Makeup", value: "makeup" },
          { title: "Special", value: "special" },
        ],
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Set to 0 for free items",
    },
    {
      name: "isFree",
      title: "Is Free",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "createdBy",
      title: "Created By",
      type: "string",
    },
    {
      name: "maturity",
      title: "Maturity",
      type: "string",
      options: {
        list: [
          { title: "Minimal", value: "minimal" },
          { title: "Low", value: "low" },
          { title: "Medium", value: "medium" },
          { title: "High", value: "high" },
        ],
      },
      initialValue: "minimal",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
}
