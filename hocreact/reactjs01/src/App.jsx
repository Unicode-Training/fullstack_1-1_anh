import React, { useState } from "react";
import Box from "./components/Box";
import Tabs from "./components/Tabs";

export const AppContext = React.createContext();
export default function App() {
  const [message, setMessage] = useState("Xin chào anh em");
  return (
    <AppContext.Provider value={{ message, setMessage }}>
      {/* <Box /> */}
      <Tabs />
    </AppContext.Provider>
  );
}

//Context: Component cho phép truyền dữ liệu từ component cha xuống component con mà không cần qua props

//A -> B -> C

//3 phần:
// - Đối tượng context
// - Provider --> Gửi dữ liệu đi
// - Consumer --> Nhận dữ liệu
