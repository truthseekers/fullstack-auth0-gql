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
  context: async ({ req, ...res }) => {
    console.log("headers auth: ", req.headers.authorization);
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
