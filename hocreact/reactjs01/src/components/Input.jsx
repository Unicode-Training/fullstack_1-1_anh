import { forwardRef, useState } from "react";
import Text from "./Text";
function Input(props, ref) {
  const [value, setValue] = useState("");
  console.log(`Input re-render`);

  return (
    <div>
      <input type="text" ref={ref} onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
      <Text value={value} />
    </div>
  );
}

export default forwardRef(Input);
