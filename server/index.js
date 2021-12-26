const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./src/resolvers");
const { verifyToken } = require("./src/utils/verifyToken");

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
    let isAuthenticated = false;
    let user = null;

    try {
      const authHeader = req.headers.authorization || "";

      if (authHeader) {
        const token = authHeader.split(" ")[1];

        const payload = await verifyToken(token);

        console.log("payload: ", payload);
      }
    } catch (error) {
      console.log("error: ", error);
    }

    console.log("headers auth: ", req.headers.authorization);
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
