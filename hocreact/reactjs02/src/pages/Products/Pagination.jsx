import { useSearchParams } from "react-router-dom";

export default function Pagination({ total, limit }) {
  //   console.log(`total: `, total);
  //   console.log(`limit: `, limit);

  //Tính tổng số trang
  const totalPages = Math.ceil(total / limit);
  const [searchParams, setSearchParams] = useSearchParams(1);
  const page = Number(searchParams.get("page")) || 1;
  const handleChangePage = (newPage) => {
    setSearchParams({ page: newPage });
    //Xử lý scroll
  };
  const handlePrevPage = () => {
    setSearchParams({
      page: page - 1,
    });
  };
  const handleNextPage = () => {
    setSearchParams({
      page: page + 1,
    });
  };
  return (
    <div className="pagination">
      {page > 1 && <button onClick={handlePrevPage}>Prev</button>}
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          className={page === index + 1 ? "active" : ""}
          onClick={() => handleChangePage(index + 1)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
      {page < totalPages && <button onClick={handleNextPage}>Next</button>}
    </div>
  );
}
