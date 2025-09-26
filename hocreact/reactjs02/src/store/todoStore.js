import { create } from "zustand";
export const useTodoStore = create((set) => {
  return {
    todoList: [],
    isLoading: true,
    getTodoList: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data = await response.json();
      set({
        todoList: data,
        isLoading: false,
      });
    },
  };
});
