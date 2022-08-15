"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApolloServer = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
require("dotenv/config");
const schema_1 = require("./schema");
const context_1 = require("./context");
require("colors");
const PORT = process.env.PORT || 4000;
async function startApolloServer() {
    const app = (0, express_1.default)();
    const httpServer = (0, http_1.createServer)(app);
    const server = new apollo_server_express_1.ApolloServer({
        schema: schema_1.schema,
        context: context_1.createContext,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })]
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise((resolve) => {
        httpServer.listen({ port: PORT });
        resolve();
    });
    console.log(`🚀  Server ready at ${process.env.HOST}:${PORT}${server.graphqlPath}`.bgYellow.italic);
}
exports.startApolloServer = startApolloServer;
startApolloServer();
