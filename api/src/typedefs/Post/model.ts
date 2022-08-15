import { objectType} from 'nexus'
import { User } from '../User'


//Post Model
export const Post = objectType({
    name: "Post",
    definition(t) {
        t.id('id')
        t.string('authorId')
        t.string('title')
        t.string('content')
        t.boolean('isPublished')
        t.nullable.field('author', {
            type: User,
            resolve: async (root, _args, ctx) => {
                return ctx.prisma.user.findUniqueOrThrow({
                    where: {
                        id: root.authorId? root.authorId: undefined
                    }
                })
            }
        })
    },
})
