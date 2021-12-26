import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useAuth0 } from "@auth0/auth0-react";

export const TODOS_QUERY = gql`
  query TODOS_QUERY {
    todos {
      title
      id
    }
  }
`;

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, user, logout } =
    useAuth0();
  const { data, loading, error } = useQuery(TODOS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("user", user);

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <button onClick={() => logout()}>logout</button>
        ) : (
          <button
            onClick={() =>
              loginWithRedirect({ appState: { targetUrl: "broilikepie" } })
            }
          >
            login
          </button>
        )}
        {!isAuthenticated && (
          <span>dont touch that form you aren't even logged in</span>
        )}
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
