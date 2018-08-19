import {
GraphQLInt,
GraphQLBoolean,
GraphQLString,
GraphQLList,
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
} from 'graphql';

const MerchantType = new GraphQLObjectType({
  name: 'Merchant',
  description: 'Merchant details',
  fields : () => ({
    id : {
      type: GraphQLString // ,
      // resolve: merchant => merchant.id
    },
    email: {type: GraphQLString}, // same name as field in REST response, so resolver is not requested
    mobile: {type: GraphQLString}
  })
});

const merchant = {
  MerchantType
}

export default merchant
