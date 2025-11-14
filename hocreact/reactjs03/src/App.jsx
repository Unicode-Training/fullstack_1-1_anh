// import { useEffect } from "react";
// import { useState } from "react";
import { useFetch } from "./utils/utils";

// import { useSomething } from "./utils/utils";
export default function App() {
  const {
    data: todoList,
    isLoading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/todos`, {
    fallbackData: [],
  });
  // console.log(todoList);

  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return (
    <div>
      <h1>Todo List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        todoList.map((item) => <h3 key={item.id}>{item.title}</h3>)
      )}
    </div>
  );
}

//Custom hook: Tạo ra 1 hook riêng phục vụ mục đích của bài toán
//Đặc điểm:
// - Hàm bắt đầu bằng từ khóa use
// - Được phép sử dụng các hook khác
