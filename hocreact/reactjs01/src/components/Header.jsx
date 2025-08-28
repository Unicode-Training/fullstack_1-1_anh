import React from "react";

export default function Header({
  title,
  description,
  name,
  email,
  age,
  address,
  onClick,
  children,
}) {
  //   console.log(props);
  const handleClick = () => {
    const data = "Header text";
    onClick(data);
  };
  return (
    <div>
      {children}
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
      <p>{address}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

//Props
