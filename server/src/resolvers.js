const { db } = require("./models");
const { AuthenticationError } = require("apollo-server");

const resolvers = {
  Query: {
    async todos(parent, args, context, info) {
      let currentUser = await context.dataSources.auth0API.getInfo();
      console.log("currentUser from the query todos resolver: ", currentUser);

      return db.getTodos();
    },
  },
  Mutation: {
    createTodo(parent, args, context, info) {
      if (!context.auth.isAuthenticated) {
        throw new AuthenticationError("Must Be Logged in!");
      }
      return db.addTodo(args);
    },
  },
};

module.exports = { resolvers };
