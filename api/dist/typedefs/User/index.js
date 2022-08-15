"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.user = exports.users = exports.InputAuthorIdForFetch = exports.InputAuthorContentForCreateQuery = exports.User = void 0;
const nexus_1 = require("nexus");
const Post_1 = require("../Post");
exports.User = (0, nexus_1.objectType)({
    name: "User",
    definition(t) {
        t.id('id');
        t.string('firstname');
        t.string('lastname'),
            t.nonNull.list.nullable.field('posts', {
                type: Post_1.Post,
                resolve: async (root, _args, ctx) => {
                    return ctx.prisma.user.findUnique({
                        where: {
                            id: root.id,
                        },
                        rejectOnNotFound: true
                    }).posts();
                }
            });
    },
});
exports.InputAuthorContentForCreateQuery = (0, nexus_1.inputObjectType)({
    name: "InputAuthorContentForCreateQuery",
    definition(t) {
        t.string("firstname");
        t.string("lastname");
    },
});
exports.InputAuthorIdForFetch = (0, nexus_1.inputObjectType)({
    name: "InputAuthorIdForFetch",
    definition(t) {
        t.string("authorId");
    },
});
exports.users = (0, nexus_1.queryField)('allUsers', {
    type: (0, nexus_1.nullable)((0, nexus_1.list)((0, nexus_1.nonNull)(exports.User))),
    async resolve(_root, _args, ctx) {
        return await ctx.prisma.user.findMany({});
    }
});
exports.user = (0, nexus_1.queryField)('user', {
    type: exports.User,
    args: {
        where: (0, nexus_1.nonNull)(exports.InputAuthorIdForFetch)
    },
    async resolve(_root, args, ctx) {
        return await ctx.prisma.user.findUniqueOrThrow({
            where: {
                id: args.where.authorId ? args.where.authorId : "NA"
            }
        });
    }
});
exports.createUser = (0, nexus_1.mutationField)('createUser', {
    type: (0, nexus_1.nullable)(exports.User),
    args: {
        input: (0, nexus_1.nonNull)(exports.InputAuthorContentForCreateQuery),
    },
    async resolve(_, args, ctx) {
        return await ctx.prisma.user.create({
            data: {
                firstname: args.input.firstname ? args.input.firstname : "NA",
                lastname: args.input.lastname ? args.input.lastname : "NA"
            }
        });
    }
});
