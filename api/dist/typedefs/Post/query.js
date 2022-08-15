"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.posts = void 0;
const nexus_1 = require("nexus");
const inputs_1 = require("./inputs");
const model_1 = require("./model");
exports.posts = (0, nexus_1.queryField)('allPosts', {
    type: (0, nexus_1.list)((0, nexus_1.nonNull)(model_1.Post)),
    resolve: async (_root, _args, ctx) => {
        return ctx.prisma.post.findMany({});
    }
});
exports.post = (0, nexus_1.queryField)('post', {
    type: (0, nexus_1.nullable)(model_1.Post),
    args: {
        where: (0, nexus_1.nonNull)(inputs_1.InputAuthorIdForPostsQuery)
    },
    resolve: async (_, args, ctx) => {
        return ctx.prisma.post.findUnique({
            where: {
                id: args.where.authorId ? args.where.authorId : undefined,
            }
        });
    }
});
