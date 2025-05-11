export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "productId",
      title: "Product ID",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "notes",
      title: "Notes",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "productName",
      subtitle: "status",
    },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title: `${title} (${subtitle})`,
      }
    },
  },
}
