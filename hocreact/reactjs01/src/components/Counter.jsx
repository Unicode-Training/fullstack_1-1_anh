import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  console.log("Counter render");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

//Tạo state để chứa số đếm
// const [tenState, tenHamThaydoiState] = useState(giatrikhoitao)
// Nếu muốn thay đổi giá trị state --> Gọi hàm tenHamThaydoiState(giatrimoi)
// Khi state thay đổi --> Hàm component sẽ tự động gọi lại --> Giao diện sẽ được cập nhật
