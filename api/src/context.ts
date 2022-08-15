import { ExpressContext } from 'apollo-server-express/dist/ApolloServer'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { prisma } from './clients'


export interface Context {
    //new instances
    request: Request,
    response: Response,
    prisma: PrismaClient
}

export async function createContext(
    request: ExpressContext
): Promise<Partial<Context>> {
    return {
        ...request,
        //singleton instances
        response: request.res,
        request: request.req,
        prisma: prisma
    }
}