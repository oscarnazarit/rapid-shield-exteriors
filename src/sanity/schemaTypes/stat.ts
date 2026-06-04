// Retired — stats are now an array inside siteSettings.
// This file is kept for reference but is not registered in the schema index.
const stat = {
  name: 'stat',
  title: 'Stats',
  type: 'document',
  fields: [
    { name: 'value', title: 'Value', type: 'string' },
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'order', title: 'Order', type: 'number' },
  ],
};

export default stat;
