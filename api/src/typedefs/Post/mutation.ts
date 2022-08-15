import { mutationField, nonNull, nullable} from 'nexus'
import {InputAuthorIdForPostsQuery, InputPostContentForCreateQuery } from './inputs'
import { Post } from './model'

/** 
 * Mutations 
 * */
export const createPost = mutationField('createPost', {
    type: nullable(Post),
    args: {
        input: nonNull(InputPostContentForCreateQuery),
        where: nonNull(InputAuthorIdForPostsQuery)
    },
    resolve: async (_root, args, ctx) =>{
        return await ctx.prisma.post.create({
            data: {
                content: args.input.content,
                title: args.input.title,
                authorId: args.where.authorId
            }
        })
    }
})

export const deletePost = mutationField('deletePost', {
    type: nullable(Post),
    args: {
        where: nonNull(InputAuthorIdForPostsQuery)
    },
    resolve: async (_, args, ctx) => {
        return await ctx.prisma.post.delete({
            where: {
                id: args.where.authorId? args.where.authorId:undefined,
            },
        })
    }
})

export const publishPost = mutationField('publishPost', {
    type: nullable(Post),
    args: {
        where: nonNull(InputAuthorIdForPostsQuery)
    },
    resolve: async (_root, args, ctx) => {
        return await ctx.prisma.post.update({
            where: {
                id: args.where.authorId?args.where.authorId:undefined
            },
            data: {
                isPublished: true
            }
        })
    }
})