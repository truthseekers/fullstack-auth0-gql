import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { TODOS_QUERY } from "./App";

export const CREATE_TODO = gql`
  mutation ($title: String!) {
    createTodo(title: $title) {
      title
      id
    }
  }
`;

function AddTodo() {
  const [title, setTitle] = useState("");
  const [createTodo, { error }] = useMutation(CREATE_TODO, {
    refetchQueries: [
      {
        query: TODOS_QUERY,
      },
    ],
  });

  const addNewTodo = () => {
    createTodo({
      variables: {
        title,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addNewTodo}>Submit</button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
}

export default AddTodo;
