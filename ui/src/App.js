import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export const TODOS_QUERY = gql`
  query TODOS_QUERY {
    todos {
      title
      id
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(TODOS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <ul>
          {data.todos.map((todo) => {
            return <Todo key={todo.id} id={todo.id} title={todo.title} />;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
