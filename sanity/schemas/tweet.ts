import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    }),
    defineField({
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'Admin control: Toggle if Tweet is deemed inaapropriate',
      type: 'boolean',
      initialValue: false,
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
      initialValue: 'https://api.dicebear.com/5.x/thumbs/png?seed=',
    }),
    defineField({
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'text',
      username: 'username',
    },
    prepare(selection) {
      const {username} = selection
      return {...selection, subtitle: username && `by ${username}`}
    },
  },
})
