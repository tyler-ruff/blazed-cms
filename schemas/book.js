/*
    Single book, large document laid out in chapters, which are outlined by the Table of Contents (contents).
*/
export default {
    name: 'book',
    title: 'Book',
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
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
      {
        name: 'publisher',
        title: 'Publisher',
        type: 'string',
      },
      {
        name: 'cover',
        title: 'Issue Cover',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'contents',
        title: 'Table Of Contents',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'index',
        title: 'Index',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        publisher: 'publisher',
        media: 'cover',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  