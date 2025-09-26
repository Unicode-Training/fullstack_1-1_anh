import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChangeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleChangeValue}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

//Lấy dữ liệu từ form
//Call API Login
//Nếu thất bại --> Thông báo lỗi: Email hoặc mật khẩu không chính xác
//Nếu thành công --> Chuyển về trang chủ
