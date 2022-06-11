/*
  Single issue type.
*/
export default {
    name: 'issueType',
    title: 'Issue Type',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
    ],
}