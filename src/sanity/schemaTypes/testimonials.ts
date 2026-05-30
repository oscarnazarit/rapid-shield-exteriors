export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'name', title: 'Customer Name', type: 'string' },
    { name: 'location', title: 'Location / Role', type: 'string' },
    { name: 'text', title: 'Review', type: 'text' },
    { name: 'rating', title: 'Rating', type: 'number' },
  ],
};
