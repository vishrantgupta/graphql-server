import merchant from './merchant'
import rest from '../rest/restutils'
import appconfig from '../config/appconfig'

import {
GraphQLInt,
GraphQLBoolean,
GraphQLString,
GraphQLList,
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
GraphQLID,
} from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    merchant: {
      type: merchant.MerchantType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      // resolve: (root, args) => merchant.fetchMerchantByURL(`merchant/${args.id}/`)
      resolve: (root, args) => merchant.merchantLoader.load(`/merchant/${args.id}/`),
    },
  }),
});

const schema = new GraphQLSchema({
    query: QueryType,
});

export default schema;
