import * as React from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Paginate = ({ numberOfPages, setCurrentPage }) => {
  const Navigate = useNavigate();

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    return Navigate(`/?page=${selectedPage + 1}`);
  };

  return (
    <>
      {numberOfPages > 1 && (
        <ReactPaginate
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={numberOfPages}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageClassName={"pagination__link"}
        />
      )}
    </>
  );
};

export { Paginate };
