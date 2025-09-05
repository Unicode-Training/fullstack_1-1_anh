import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import Counter from "./components/Counter";
import Form from "./components/Form";
export default function App() {
  const status = true;
  const isAuthenticated = false;
  const guestJsx = <h2>Vui lòng đăng nhập</h2>;
  const url = "https://online.unicode.vn";
  const users = ["User 1", "User 2", "User 3", "User 4"];
  const usersJsx = users.map((user, index) => <li key={index}>{user}</li>);
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 1000,
    },
    {
      id: 2,
      name: "Product 2",
      price: 2000,
    },
    {
      id: 3,
      name: "Product 3",
      //   price: "",
    },
  ];
  const handleBuy = (id) => {
    console.log(id);
  };
  const productsJsx = products.map((product) => (
    <div key={product.id} className="product-item">
      <h3>{product.name}</h3>
      <p>{product.price || "Miễn phí"}</p>
      <button onClick={() => handleBuy(product.id)}>Mua ngay</button>
    </div>
  ));
  const handleClick = (e) => {
    console.log("Ahihi");
    console.log(e);
  };
  const handleChangeInput = (e) => {
    console.log(e.target.value);
  };
  const user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    age: 33,
    address: "Hà Nội",
  };
  const handleClickFromHeader = (data) => {
    console.log("Click từ header", data);
  };
  return (
    <>
      {/* <Header
        title="Unicode"
        description="Học HTML và CSS"
        // name={user.name}
        // email={user.email}
        // age={user.age}
        {...user}
        onClick={handleClickFromHeader}
      >
        <h1>Xin chào anh em</h1>
      </Header>
      <h1
        className="title"
        style={{
          color: "red",
          backgroundColor: "yellow", //background-color
          padding: "10px",
        }}
        onClick={handleClick}
      >
        Unicode Academy
      </h1>
      <input type="text" onChange={handleChangeInput} />
      {productsJsx}

      {status && (
        <>
          {isAuthenticated ? <h3>Đã đăng nhập</h3> : guestJsx}
          <h3>
            <a href={url}>Unicode</a>
          </h3>
          <ul>{usersJsx}</ul>
          <button disabled={true}>Click me</button>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            assumenda ut? Nemo, ex eaque quasi illo excepturi unde? Excepturi ad
            ipsa suscipit voluptate fuga exercitationem aut necessitatibus
            adipisci ut rerum?
          </p>
        </>
      )} */}
      {/* <Users /> */}
      {/* <Counter /> */}
      <Form />
    </>
  );
}

//Fragment
//Shorthand: <></>
