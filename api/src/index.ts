import express from 'express'
import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer} from 'apollo-server-core'
import 'dotenv/config'
import { schema } from './schema'
import { createContext } from './context'
import 'colors'
const PORT = process.env.PORT || 4000

export async function startApolloServer() {
    const app = express()
    const httpServer = createServer(app)
    const server = new ApolloServer({
        schema,
        //everytime there's a request to the api, we will create a singleton instance of prisma to run resolvers
        context: createContext,
        plugins:[ApolloServerPluginDrainHttpServer({httpServer})]
    })

    await server.start()

    server.applyMiddleware({app})
    await new Promise<void>((resolve) => {
        httpServer.listen({port: PORT})
        resolve()
    })
    
    console.log(`🚀  Server ready at ${process.env.HOST}:${PORT}${server.graphqlPath}`.bgYellow.italic)

}

startApolloServer()