// import Users from './data/users';
// import Todos from './data/todos';
// import find from 'lodash/find';
// import filter from 'lodash/filter';
// import sumBy from 'lodash/sumBy';

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

// const UserType = new GraphQLObjectType({
//     name: 'User',
//     description: 'Users in company',
//     fields: () => ({
//             id: {type: new GraphQLNonNull(GraphQLInt)},
//             first_name: {type: new GraphQLNonNull(GraphQLString)},
//             last_name: {type: new GraphQLNonNull(GraphQLString)},
//             email: {type: GraphQLString},
//             gender: {type: GraphQLString},
//             department: {type: new GraphQLNonNull(GraphQLString)},
//             country: {type: new GraphQLNonNull(GraphQLString)},
//             todo_count: {
//                 type: GraphQLInt,
//                 resolve: (user) => {
//                     return sumBy(Todos, todo => todo.userId === user.id ? 1:0);
//                 }
//             },
//             todos: {
//                 type: new GraphQLList(TodoType),
//                 resolve: (user, args) => {
//                     return filter(Todos, todo => todo.userId === user.id);
//                 }
//             }
//         })
// });
//
// const TodoType = new GraphQLObjectType({
//     name: 'Todo',
//     description: 'Task for user',
//     fields: () => ({
//             id: {type: new GraphQLNonNull(GraphQLInt)},
//             title: {type: GraphQLString},
//             completed: {type: new GraphQLNonNull(GraphQLBoolean)},
//             user: {
//                 type: UserType,
//                 resolve: (todo, args) => {
//                     return find(Users, user => user.id === todo.userId);
//                 }
//             }
//         })
// });

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    merchant: {
      type: merchant.MerchantType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve: (root, args) => rest.fetchResponseByURL(`merchant/${args.id}/`)
    },
  }),
});


const schema = new GraphQLSchema({
    query: QueryType,
});

export default schema;
