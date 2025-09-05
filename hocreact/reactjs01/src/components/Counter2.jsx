import { useEffect, useState } from "react";
let a = 0;
export default function Counter2() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  if (count <= 5) {
    a = count;
  }
  useEffect(() => {
    console.log(`Effect running: ${count}`);
    //Cleanup
    return () => {
      console.log(`useEffect cleanup: ${count}`);
    };
  }, [a]);
  console.log(`Counter re-render: ${count}`);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>+</button>
      {console.log("UI Update")}
    </div>
  );
}
