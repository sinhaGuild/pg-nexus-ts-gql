import { objectType, queryField, mutationField, nonNull, list, nullable, inputObjectType } from 'nexus'
import { Post } from '../Post'

/**
 * Model
 */
export const User = objectType({
    name: "User",
    definition(t) {
        t.id('id')
        t.string('firstname')
        t.string('lastname'),
        t.nonNull.list.nullable.field('posts', {
            type: Post,
            resolve: async (root, _args, ctx) => {
                return ctx.prisma.user.findUnique({
                    where: {
                        id: root.id,
                    },
                    rejectOnNotFound: true
                }).posts()
            }
        })
    },
})

//Input Types
export const InputAuthorContentForCreateQuery = inputObjectType({
    name: "InputAuthorContentForCreateQuery",
    definition(t) {
        t.string("firstname")
        t.string("lastname")
    },
})
//Input Types
export const InputAuthorIdForFetch = inputObjectType({
    name: "InputAuthorIdForFetch",
    definition(t) {
        t.string("authorId")
    },
})


//Queries
export const users = queryField('allUsers', {
    type: nullable(list(nonNull(User))),
    async resolve(_root, _args, ctx) {
        return await ctx.prisma.user.findMany({})
    }
})

export const user = queryField('user', {
    type: User,
    args: {
        where: nonNull(InputAuthorIdForFetch)
    },
    async resolve (_root, args, ctx){
        return await ctx.prisma.user.findUniqueOrThrow({
            where: {
                id: args.where.authorId?args.where.authorId: "NA"
            }
        })
    }
})

//Mutations
export const createUser = mutationField('createUser', {
    type: nullable(User),
    args: {
        input: nonNull(InputAuthorContentForCreateQuery),
    },
    async resolve(_, args, ctx) {
        return await ctx.prisma.user.create({
            data: {
                firstname: args.input.firstname? args.input.firstname:"NA",
                lastname: args.input.lastname? args.input.lastname:"NA"
            }
        })
    }
})

