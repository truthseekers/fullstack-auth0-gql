const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./src/resolvers");
const { verifyToken } = require("./src/utils/verifyToken");
const { RESTDataSource } = require("apollo-datasource-rest");

class Auth0API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://${process.env.AUTH0_DOMAIN}/`;
  }

  async getInfo() {
    try {
      const response = await this.get("userinfo");
      console.log("Hello in getInfo. response: ", response);
      return response;
    } catch (err) {
      console.log("getInfo error: ", err);
      return err;
    }
  }

  willSendRequest(request) {
    console.log("in willSendRequest");
    request.headers.set("Authorization", `Bearer ${this.context.auth.token}`);
  }
}

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
  dataSources: () => ({
    auth0API: new Auth0API(),
  }),
  context: async ({ req, ...rest }) => {
    let isAuthenticated = false;
    let token;

    try {
      const authHeader = req.headers.authorization || "";

      if (authHeader) {
        token = authHeader.split(" ")[1];

        const payload = await verifyToken(token);
        isAuthenticated = payload ? true : false;

        console.log("payload: ", payload);
      }
    } catch (error) {
      console.log("error: ", error);
    }

    console.log("headers auth: ", req.headers.authorization);

    return { ...rest, req, auth: { isAuthenticated, token } };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});
