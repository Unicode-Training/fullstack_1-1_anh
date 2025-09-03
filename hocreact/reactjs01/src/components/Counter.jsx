import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= 10) {
        setMessage("Thành công");
      }
      return newCount;
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      {message && <h2>{message}</h2>}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

//Tạo state để chứa số đếm
// const [tenState, tenHamThaydoiState] = useState(giatrikhoitao)
// Nếu muốn thay đổi giá trị state --> Gọi hàm tenHamThaydoiState(giatrimoi)
// Khi state thay đổi --> Hàm component sẽ tự động gọi lại --> Giao diện sẽ được cập nhật
