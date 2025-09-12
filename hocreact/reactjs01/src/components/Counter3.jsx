import { useState, useRef, useEffect } from "react";

export default function Counter3() {
  const [count, setCount] = useState(0);
  const dataRef = useRef(0); //{current: 0}
  const headingRef = useRef();
  const itemsRef = useRef([]);
  const handleIncrement = () => {
    setCount(count + 1);
    dataRef.current++;
  };
  const data = ["Item 1", "Item 2", "Item 3", "Item 4"];
  useEffect(() => {
    // console.log(headingRef);
    itemsRef.current.forEach((el) => {
      el.addEventListener("click", () => {
        el.style.color = "red";
      });
    });
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2 ref={headingRef}>Unicode Academy</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button
        onClick={() => {
          headingRef.current.innerText = "Ahihi";
        }}
      >
        Click me
      </button>
      <ul>
        {data.map((item, index) => (
          <li key={index} ref={(element) => itemsRef.current.push(element)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
