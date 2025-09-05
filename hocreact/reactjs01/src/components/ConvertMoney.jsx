import { useEffect, useState } from "react";
const RATE = 26000;
export default function ConvertMoney() {
  const [vnd, setVnd] = useState(1);
  const [usd, setUsd] = useState(0);
  const handleChangeVnd = (e) => {
    const newUsd = e.target.value / RATE;
    setUsd(newUsd);
    setVnd(e.target.value);
  };
  const handleChangeUsd = (e) => {
    const newVnd = e.target.value * RATE;
    setVnd(newVnd);
    setUsd(e.target.value);
  };
  useEffect(() => {
    const newUsd = vnd / RATE;
    setUsd(newUsd);
  }, []);
  return (
    <div>
      <div>
        <label>VND</label>
        <input
          type="text"
          placeholder="VND"
          value={vnd}
          onChange={handleChangeVnd}
        />
      </div>
      <div>
        <label>USD</label>
        <input
          type="text"
          placeholder="USD"
          value={usd}
          onChange={handleChangeUsd}
        />
      </div>
    </div>
  );
}
