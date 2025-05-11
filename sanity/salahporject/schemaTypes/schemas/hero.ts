export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'maturity',
      title: 'Maturity',
      type: 'string',
      options: {
        list: [
          {title: 'Minimal', value: 'Minimal'},
          {title: 'Low', value: 'Low'},
          {title: 'Medium', value: 'Medium'},
          {title: 'High', value: 'High'},
        ],
      },
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the main button',
    },
    {
      name: 'buttonIcon',
      title: 'Button Icon SVG',
      type: 'text',
      description: 'SVG markup for the button icon',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Carousel images for the hero section',
    },
  ],
}
