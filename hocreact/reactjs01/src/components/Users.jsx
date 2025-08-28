import UserItem from "./UserItem";

export default function Users() {
  const users = [
    {
      id: 1,
      name: "User 1",
      status: true,
      image:
        "https://plus.unsplash.com/premium_photo-1755856680228-60755545c4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "User 2",
      status: true,
    },
    {
      id: 3,
      name: "User 3",
      status: false,
      image:
        "https://images.unsplash.com/photo-1755257422437-5248f69bf52e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
//Yêu cầu:
// - Tạo Component có tên là UserItem
// - JSX ở dạng sau
/*
<div>
<h3>Tên User</h3>
<h4>Trạng thái</h4>
</div>
*/
//Gọi component UserItem vào component Users (Trong vòng lặp map), để đảm bảo dữ liệu được hiện như lúc ban đầu
