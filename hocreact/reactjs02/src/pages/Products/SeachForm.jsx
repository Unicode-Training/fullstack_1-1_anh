import { useSearchParams } from "react-router-dom";
import { debounce } from "../../utils/utils";
import { useEffect, useRef } from "react";
export default function SeachForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();
  const keyword = searchParams.get("keyword") ?? "";
  const handleChange = debounce((e) => {
    const keyword = e.target.value;
    setSearchParams({ keyword });
  });
  useEffect(() => {
    if (!keyword) {
      inputRef.current.value = "";
    }
  }, [keyword]);

  return (
    <div>
      <input
        type="search"
        placeholder="Tìm kiếm..."
        onChange={handleChange}
        ref={inputRef}
        defaultValue={searchParams.get("keyword") ?? ""}
      />
    </div>
  );
}
