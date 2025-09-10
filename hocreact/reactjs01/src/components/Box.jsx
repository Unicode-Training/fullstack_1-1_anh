import { useContext } from "react";
import Content from "./Content";
import { AppContext } from "../App";

export default function Box() {
  const context = useContext(AppContext);

  return (
    <div>
      <Content />
      <button onClick={() => context.setMessage("Ok chưa?")}>
        Change Text
      </button>
    </div>
  );
}
