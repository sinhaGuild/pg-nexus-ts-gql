/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as PrismaClient from ".prisma/client"
import type { Context as Context } from "./context.js"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  InputAuthorContentForCreateQuery: { // input type
    firstname?: string | null; // String
    lastname?: string | null; // String
  }
  InputAuthorIdForFetch: { // input type
    authorId?: string | null; // String
  }
  InputAuthorIdForPostsQuery: { // input type
    authorId?: string | null; // String
  }
  InputPostContentForCreateQuery: { // input type
    content: string; // String!
    isPublished?: boolean | null; // Boolean
    title: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Post: PrismaClient.Post;
  Query: {};
  User: PrismaClient.User;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPost: NexusGenRootTypes['Post'] | null; // Post
    createUser: NexusGenRootTypes['User'] | null; // User
    deletePost: NexusGenRootTypes['Post'] | null; // Post
    publishPost: NexusGenRootTypes['Post'] | null; // Post
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    authorId: string; // String!
    content: string; // String!
    id: string; // ID!
    isPublished: boolean; // Boolean!
    title: string; // String!
  }
  Query: { // field return type
    allPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    allUsers: NexusGenRootTypes['User'][] | null; // [User!]
    post: NexusGenRootTypes['Post'] | null; // Post
    user: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    firstname: string; // String!
    id: string; // ID!
    lastname: string; // String!
    posts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createPost: 'Post'
    createUser: 'User'
    deletePost: 'Post'
    publishPost: 'Post'
  }
  Post: { // field return type name
    author: 'User'
    authorId: 'String'
    content: 'String'
    id: 'ID'
    isPublished: 'Boolean'
    title: 'String'
  }
  Query: { // field return type name
    allPosts: 'Post'
    allUsers: 'User'
    post: 'Post'
    user: 'User'
  }
  User: { // field return type name
    firstname: 'String'
    id: 'ID'
    lastname: 'String'
    posts: 'Post'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      input: NexusGenInputs['InputPostContentForCreateQuery']; // InputPostContentForCreateQuery!
      where: NexusGenInputs['InputAuthorIdForPostsQuery']; // InputAuthorIdForPostsQuery!
    }
    createUser: { // args
      input: NexusGenInputs['InputAuthorContentForCreateQuery']; // InputAuthorContentForCreateQuery!
    }
    deletePost: { // args
      where: NexusGenInputs['InputAuthorIdForPostsQuery']; // InputAuthorIdForPostsQuery!
    }
    publishPost: { // args
      where: NexusGenInputs['InputAuthorIdForPostsQuery']; // InputAuthorIdForPostsQuery!
    }
  }
  Query: {
    post: { // args
      where: NexusGenInputs['InputAuthorIdForPostsQuery']; // InputAuthorIdForPostsQuery!
    }
    user: { // args
      where: NexusGenInputs['InputAuthorIdForFetch']; // InputAuthorIdForFetch!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}