"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishPost = exports.deletePost = exports.createPost = void 0;
const nexus_1 = require("nexus");
const inputs_1 = require("./inputs");
const model_1 = require("./model");
exports.createPost = (0, nexus_1.mutationField)('createPost', {
    type: (0, nexus_1.nullable)(model_1.Post),
    args: {
        input: (0, nexus_1.nonNull)(inputs_1.InputPostContentForCreateQuery),
        where: (0, nexus_1.nonNull)(inputs_1.InputAuthorIdForPostsQuery)
    },
    resolve: async (_root, args, ctx) => {
        return await ctx.prisma.post.create({
            data: {
                content: args.input.content,
                title: args.input.title,
                authorId: args.where.authorId
            }
        });
    }
});
exports.deletePost = (0, nexus_1.mutationField)('deletePost', {
    type: (0, nexus_1.nullable)(model_1.Post),
    args: {
        where: (0, nexus_1.nonNull)(inputs_1.InputAuthorIdForPostsQuery)
    },
    resolve: async (_, args, ctx) => {
        return await ctx.prisma.post.delete({
            where: {
                id: args.where.authorId ? args.where.authorId : undefined,
            },
        });
    }
});
exports.publishPost = (0, nexus_1.mutationField)('publishPost', {
    type: (0, nexus_1.nullable)(model_1.Post),
    args: {
        where: (0, nexus_1.nonNull)(inputs_1.InputAuthorIdForPostsQuery)
    },
    resolve: async (_root, args, ctx) => {
        return await ctx.prisma.post.update({
            where: {
                id: args.where.authorId ? args.where.authorId : undefined
            },
            data: {
                isPublished: true
            }
        });
    }
});
