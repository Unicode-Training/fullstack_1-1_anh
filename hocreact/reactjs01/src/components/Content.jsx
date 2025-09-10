import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Content() {
  const context = useContext(AppContext);

  return (
    <div>
      <h2>{context.message}</h2>
    </div>
  );
}
