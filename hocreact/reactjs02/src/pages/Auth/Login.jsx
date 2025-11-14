import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/utils";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChangeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      if (!response.ok) {
        throw new Error("login failed");
      }
      const token = await response.json();
      saveToken(token);
      navigate("/");
    } catch {
      setMessage("Email hoặc mật khẩu không chính xác");
    } finally {
      setLoading(false);
    }
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
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}

//Lấy dữ liệu từ form
//Call API Login
//Nếu thất bại --> Thông báo lỗi: Email hoặc mật khẩu không chính xác
//Nếu thành công --> Chuyển về trang chủ
