const { db } = require("./models");
const { AuthenticationError } = require("apollo-server");

const resolvers = {
  Query: {
    todos(parent, args, context, info) {
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
