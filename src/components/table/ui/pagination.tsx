import React from "react";

import * as CoreList from "@nexys/core-list";
import { PaginationProps } from "@nexys/core-list/dist/list/ui-type";

const { getPagination } = CoreList.PaginationUtils;

const Pagination = ({ n, nPerPage }: PaginationProps): JSX.Element | null => {
  if (n === 0) {
    return null;
  }

  const { nPage } = getPagination(n, nPerPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            {nPage}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
