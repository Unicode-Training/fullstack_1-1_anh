import Avatar from "./Avatar";
export default function UserItem({ user }) {
  return (
    <div style={{ border: "1px solid red" }}>
      {/*
     Gọi component avatar vào đây, nếu user có image
     */}
      {user.image && <Avatar url={user.image} />}
      <h3>{user.name}</h3>
      <h4>{user.status ? "Online" : "Offline"}</h4>
    </div>
  );
}
//Tạo component tên là Avatar, nội dung component chứa thẻ img có with = 300px, height = 200px
//Kiểm tra user nào có image --> Gọi component Avatar (Trước tên user)
