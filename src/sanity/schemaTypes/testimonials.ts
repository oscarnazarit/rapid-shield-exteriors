// Retired — testimonials are now an array inside siteSettings.
// This file is kept for reference but is not registered in the schema index.
const testimonials = {
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

export default testimonials;
