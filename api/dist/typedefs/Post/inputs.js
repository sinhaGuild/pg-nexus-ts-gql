"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPostContentForCreateQuery = exports.InputAuthorIdForPostsQuery = void 0;
const nexus_1 = require("nexus");
exports.InputAuthorIdForPostsQuery = (0, nexus_1.inputObjectType)({
    name: "InputAuthorIdForPostsQuery",
    definition(t) {
        t.string("authorId");
    },
});
exports.InputPostContentForCreateQuery = (0, nexus_1.inputObjectType)({
    name: "InputPostContentForCreateQuery",
    definition(t) {
        t.nonNull.string('title');
        t.nonNull.string('content');
        t.nullable.boolean('isPublished');
    },
});
