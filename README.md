##### PRISMA - NEXUS - GQL - APOLLO - POSTGRES - TYPESCRIPT

---

<img src="https://www.pngmart.com/files/2/Chicken-Transparent-PNG.png" alt="drawing" width="55%" style="margin-bottom:-100%; position: absolute; right:0"/>

## COMMON PATTERNS

### Folder Structure

`src`

- Root Folder

`server.ts`

- Schema-resolver objectTypes, queryTypes, mutationTypes

`context.ts`

- Returns a singleton instance of prismaclient

`schema.ts`

- Will invoke the graphql-apollo server.

---

## KEY VARIANCES

### graphql-express vs. graphql

`server.ts` - express vs. apollo-server - express uses graphiql vs. apollo uses apollo-ui

`schema.ts` - invoking context as a singleton for apollo-server

### graphql-express vs. graphql-express-sdl-first

#### _sdl or SCHEMA-first_

    Manually write the GraphQL schema definition in GraphQL SDL
    Implement the required resolver functions

    - typedefs (schema)
    - queries
    - mutations

#### _nexus-based OR CODE-first_

> The only tool you need is the programming language

    There is no manually maintained version of your schema definition.
    SDL(or schema) is generated from the code that implements the schema.

    - schema-query-mutations
    - prisma
