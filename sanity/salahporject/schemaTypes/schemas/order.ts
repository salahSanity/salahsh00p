export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
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
      name: "contactInfo",
      title: "Contact Info",
      type: "string",
      description: "Email or phone number of the customer",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      initialValue: 1,
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Completed", value: "completed" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      initialValue: "pending",
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
