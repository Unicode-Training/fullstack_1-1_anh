import { useRef, useState } from "react";

export default function CheckboxList() {
  const data = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4"];
  const checkboxListRef = useRef([]);
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckAll = (e) => {
    const status = e.target.checked;
    checkboxListRef.current.forEach((el) => {
      el.checked = status;
    });
    if (status) {
      setCheckedCount(checkboxListRef.current.length);
    } else {
      setCheckedCount(0);
    }
  };

  const handleUpdateCheckboxRef = (el) => {
    if (checkboxListRef.current.length < data.length) {
      checkboxListRef.current.push(el);
    }
  };

  const handleCheckItem = (e) => {
    const status = e.target.checked;
    setCheckedCount(status ? checkedCount + 1 : checkedCount - 1);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckAll}
          checked={
            checkedCount > 0 && checkedCount === checkboxListRef.current.length
          }
        />
        Check All
      </label>
      <hr />
      {data.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              ref={(el) => handleUpdateCheckboxRef(el)}
              onChange={handleCheckItem}
            />
            {item}
          </label>
        </div>
      ))}
      <hr />
      <button disabled={checkedCount === 0}>
        Xóa đã chọn ({checkedCount})
      </button>
    </div>
  );
}
