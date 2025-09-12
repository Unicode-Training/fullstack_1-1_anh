import { useEffect, useRef } from "react";
import CheckboxList from "./components/CheckboxList";
import Counter3 from "./components/Counter3";
import Input from "./components/Input";

export default function App() {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
  }, []);
  return (
    <div>
      {/* <Counter3 /> */}
      {/* <CheckboxList /> */}
      <Input ref={inputRef} />
    </div>
  );
}

//Ref:
// Trong component --> Tạo ra 1 biến --> Component re-render --> Biến sẽ bị reset về giá trị khởi
// Tạo ra 1 ref --> Khi component re-render --> Tự động tham chiếu giá trị gần nhất (Giá trị của ref sẽ không bị thay đổi)

//Khi ref thay đổi --> Component sẽ không re-render

//Ref được dùng để tham chiếu tới 1 phần tử DOM
