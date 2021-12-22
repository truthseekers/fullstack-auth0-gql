const { db } = require("./models");

const resolvers = {
  Query: {
    todos(parent, args, context, info) {
      return db.getTodos();
    },
  },
  Mutation: {
    createTodo(parent, args, context, info) {
      return db.addTodo(args);
    },
  },
};

module.exports = { resolvers };
