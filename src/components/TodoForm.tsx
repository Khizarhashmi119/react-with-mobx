// import { useLocalObservable } from "mobx-react";
import { FormEvent, useState } from "react";

// import { createTodoStore } from "../todosStore";
import { todoStore } from "../todosStore";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  // const todoStore = useLocalObservable(createTodoStore);

  const handleSubmitTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    todoStore.addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
