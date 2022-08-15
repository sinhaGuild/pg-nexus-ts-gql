
import { queryField, nullable, list, nonNull } from 'nexus'
import { InputAuthorIdForPostsQuery } from './inputs'
import { Post } from './model'

/** Queries */
export const posts = queryField('allPosts', {
    type: list(nonNull(Post)),
    resolve: async(_root, _args, ctx) => {
        return ctx.prisma.post.findMany({})
    }
})

export const post = queryField('post', {
    type: nullable(Post),
    args: {
        where: nonNull(InputAuthorIdForPostsQuery)
    },
    resolve: async(_, args, ctx) => {
        return ctx.prisma.post.findUnique({
            where: {
                id: args.where.authorId?args.where.authorId:undefined,
            }
        })
    }
})