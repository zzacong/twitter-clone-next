import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile image',
      type: 'string',
    }),
    defineField({
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference to the Tweet the comment is associated to:',
      type: 'reference',
      to: {type: 'tweet'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
      readOnly: true,
      initialValue: new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'comment',
      subtitle: `username`,
    },
  },
})
