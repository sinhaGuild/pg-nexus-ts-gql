import { inputObjectType } from 'nexus'

export const InputAuthorIdForPostsQuery = inputObjectType({
    name: "InputAuthorIdForPostsQuery",
    definition(t) {
        t.string("authorId")
    },})


export const InputPostContentForCreateQuery = inputObjectType({
    name: "InputPostContentForCreateQuery",
    definition(t) {
        t.nonNull.string('title')
        t.nonNull.string('content')
        t.nullable.boolean('isPublished')
    },
})