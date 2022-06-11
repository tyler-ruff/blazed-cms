/*
  Press collection: publishes issues of a magazine, newspaper, and/or scholarly journal.
*/
export default {
    name: 'press',
    title: 'Press',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'publisher',
        title: 'Publisher',
        type: 'string'
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        publisher: 'publisher'
      }
    }
  }
  