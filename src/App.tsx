import {
  observer,
  // useLocalObservable
} from "mobx-react";
import { Fragment } from "react";

import TodoForm from "./components/TodoForm";
// import { createTodoStore } from "./todosStore";
import { todoStore } from "./todosStore";

import "./App.css";

const App = observer(() => {
  // const todoStore = useLocalObservable(createTodoStore);

  return (
    <Fragment>
      <TodoForm />
      <ul>
        {todoStore.todos.map(({ id, text, isCompleted }) => (
          <li key={id}>
            <span>{text}: </span>
            <span>{isCompleted ? "Completed" : "Not completed"}</span>
            <button onClick={() => todoStore.removeTodo(id)}>Delete</button>
            <button onClick={() => todoStore.toggleTodo(id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
});

export default App;
