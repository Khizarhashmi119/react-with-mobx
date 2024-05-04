import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

import { TTodo } from "./types/Todo";

// export type TCreateTodoStore = {
//   todos: TTodo[];
//   addTodo: (text: string) => void;
//   toggleTodo: (text: string) => void;
//   removeTodo: (id: string) => void;
// };

// export const createTodoStore = (): TCreateTodoStore => {
//   return {
//     todos: [],
//     addTodo(text: string) {
//       this.todos.push({
//         id: nanoid(),
//         text,
//         isCompleted: false,
//       });
//     },
//     toggleTodo(id: string) {
//       this.todos = this.todos.map((todo) =>
//         todo.id === id
//           ? {
//               ...todo,
//               isCompleted: !todo.isCompleted,
//             }
//           : todo
//       );
//     },
//     removeTodo(id: string) {
//       this.todos = this.todos.filter((todo) => todo.id !== id);
//     },
//   };
// };

export class TodoStore {
  todos: TTodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text: string) {
    this.todos.push({
      id: nanoid(),
      text,
      isCompleted: false,
    });
  }

  toggleTodo(id: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    );
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export const todoStore = new TodoStore();
