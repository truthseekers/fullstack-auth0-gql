const data = require("./data");

const getTodos = (filter) => {
  if (!filter) {
    return data.todos;
  }

  return data.todos.filter(filter);
};

const addTodo = (args) => {
  const newId = data.todos.length + 1;
  const todoToAdd = { id: newId, title: args.title };
  data.todos.push(todoToAdd);
  return todoToAdd;
};

const db = {
  getTodos,
  addTodo,
};

module.exports = {
  db,
};
