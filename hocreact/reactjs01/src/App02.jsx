import ConvertMoney from "./components/ConvertMoney";
import Counter2 from "./components/Counter2";
import Posts from "./components/Posts";

export default function App() {
  return (
    <div>
      {/* <Counter2 /> */}
      {/* <ConvertMoney /> */}
      <Posts />
    </div>
  );
}

//Vòng đời component: Quá trình từ khi component được tạo ra cho đến khi nó bị xóa khỏi DOM
// Giai đoạn 1: Khởi tạo (Mounting)
// Giai đoạn 2: Cập nhật (Updating)
// Giai đoạn 3: Xóa khỏi DOM (Unmounting)

//Sử dụng hook useEffect(callback, dependencies)
// - callback: Hàm để thực thi logic nào đó
// - dependencies: Điều kiện để callback thực thi
// + null hoặc undefined --> Component re-render --> useEffect sẽ chạy
// + [] --> Chỉ chạy khi component được khởi tạo (Mounting)
// + [bien1, bien2] --> Khi 1 trong các biến trong mảng thay đổi --> useEffect sẽ chạy
// usEffect sẽ chạy khi component cập nhật giao diện xong

//Cleanup trong useEffect --> Dùng để dọn dẹp dữ liệu cũ của lần render trước

//Thứ tự chạy của useEffect
//1. State thay đổi
//2. Component re-render (Gọi lại hàm component)
//3. UI Update
//4. Cleanup (Nếu có)
//5. Callback của useEffect
