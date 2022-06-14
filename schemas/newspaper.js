/*
  Single issue of newspaper
*/
export default {
    name: 'newspaper',
    title: 'Newspaper',
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
        name: 'press',
        title: 'Press',
        type: 'reference',
        to: {type: 'press'},
      },
      {
        name: 'type',
        title: 'Type',
        type: 'reference',
        to: {type: 'issueType'},
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
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        press: 'press.title',
        media: 'cover',
      },
      /*
      prepare(selection) {
        const {author, press} = selection
       return {
           subtitle: `Written by: ${author} / Published in: ${press}`
       }
      },
      */
      prepare(selection) {
        const {press} = selection
        return Object.assign({}, selection, {
          subtitle: press && `in ${press}`,
        })
      },
    },
  }
  