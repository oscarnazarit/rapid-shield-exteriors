// sanity/schemaTypes/stat.ts
export default {
  name: 'stat',
  title: 'Stats',
  type: 'document',
  fields: [
    { name: 'value', title: 'Value', type: 'string' },
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'order', title: 'Order', type: 'number' },
  ],
};
