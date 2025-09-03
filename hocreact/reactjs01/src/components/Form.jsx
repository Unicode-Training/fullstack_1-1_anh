import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // const newForm = { ...form };
    // newForm[e.target.name] = e.target.value;
    // setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Vui lòng nhập email";
    }
    if (!form.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    }
    setErrors(newErrors);

    if (!Object.keys(newErrors).length) {
      //Thêm
      if (!editIndex) {
        setUsers([
          ...users,
          {
            email: form.email,
            password: form.password,
          },
        ]);
      } else {
        setUsers(
          users.map((user, index) => {
            if (index === editIndex) {
              return {
                ...form,
              };
            }
            return user;
          })
        );
      }

      setForm({
        email: "",
        password: "",
      });
    }
  };
  const remove = (index) => {
    // const newUsers = [...users];
    // //Xóa
    // newUsers.splice(index, 1);
    // //Cập nhật lại state users --> setUsers(newUsers);
    // setUsers(newUsers);
    setUsers(users.filter((user, i) => i !== index));
  };
  const edit = (index) => {
    const user = { ...users[index] };
    setForm(user);
    setEditIndex(index);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChangeValue}
            value={form.email}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleChangeValue}
            value={form.password}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button>Submit</button>
      </form>
      <h2>Danh sách tài khoản</h2>
      <table width={"100%"} border={1}>
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Email</th>
            <th>Password</th>
            <th width="5%">Sửa</th>
            <th width="5%">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => edit(index)}>Sửa</button>
              </td>
              <td>
                <button onClick={() => remove(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
