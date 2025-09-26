import { useEffect } from "react";
import { useAuthStore, useTodoStore } from "../store";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { todoList, isLoading, getTodoList } = useTodoStore();
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <div>
      <h1>Contact</h1>
      <h2>{user.name}</h2>
      <button onClick={() => navigate("/")}>Click me</button>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        todoList.map((item) => <h4 key={item.id}>{item.title}</h4>)
      )}
    </div>
  );
}
