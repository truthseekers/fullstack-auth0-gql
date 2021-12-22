const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./src/resolvers");

const typeDefs = gql`
  type Todo {
    title: String!
    id: ID!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(title: String!): Todo
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
