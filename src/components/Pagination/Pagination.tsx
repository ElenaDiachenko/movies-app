import { FC, MouseEvent } from 'react';
import { usePagination, DOTS } from 'hooks/usePagination';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

type PaginationProps = {
  total: number;
  buttonConst: number;
  siblingCount: number;
  currentPage: number;
  limit: number;
  paginate: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  total,
  currentPage,
  buttonConst,
  limit,
  siblingCount,
  paginate,
}) => {
  const totalPageCount = Math.ceil(total / limit);

  const paginationRange = usePagination({
    totalPageCount,
    buttonConst,
    siblingCount,
    currentPage,
  });

  const changePage = (e: MouseEvent<HTMLButtonElement>) => {
    const span = e.target as HTMLElement;
    const pageNumber = Number(span.textContent);
    paginate(pageNumber);
  };

  return (
    <nav aria-label="pagination" style={{ display: 'flex' }}>
      {currentPage > 1 && (
        <button aria-label="previous" onClick={() => paginate(currentPage - 1)}>
          <BsArrowLeft size={23} />
        </button>
      )}
      {paginationRange &&
        paginationRange.map((item, index) => {
          if (item === DOTS) {
            return <button key={index}>&#8230;</button>;
          }
          return (
            <button key={index} onClick={changePage}>
              <span>{item}</span>
            </button>
          );
        })}

      {currentPage !== totalPageCount && (
        <button aria-label="next" onClick={() => paginate(currentPage + 1)}>
          <BsArrowRight size={23} />
        </button>
      )}
    </nav>
  );
};
