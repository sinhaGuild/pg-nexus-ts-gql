"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const nexus_1 = require("nexus");
const User_1 = require("../User");
exports.Post = (0, nexus_1.objectType)({
    name: "Post",
    definition(t) {
        t.id('id');
        t.string('authorId');
        t.string('title');
        t.string('content');
        t.boolean('isPublished');
        t.nullable.field('author', {
            type: User_1.User,
            resolve: async (root, _args, ctx) => {
                return ctx.prisma.user.findUniqueOrThrow({
                    where: {
                        id: root.authorId ? root.authorId : undefined
                    }
                });
            }
        });
    },
});
