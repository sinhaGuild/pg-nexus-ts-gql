import { PrismaClient } from '@prisma/client'

//define a singleton instance
export const prisma = new PrismaClient()