import { MouseEvent } from 'react';
import { usePagination, DOTS } from 'hooks';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { PaginationContainer, StyledButton } from './Pagination.styled';

type PaginationProps = {
  total: number;
  buttonConst: number;
  siblingCount: number;
  currentPage: number;
  contentPerPage: number;
  limit: number;
  paginate: (page: number) => void;
};

export const Pagination = ({
  total,
  currentPage,
  buttonConst,
  limit,
  siblingCount,
  paginate,
}: PaginationProps) => {
  const paginationRange = usePagination({
    total,
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
    <PaginationContainer aria-label="pagination" style={{ display: 'flex' }}>
      {currentPage > 1 && (
        <StyledButton
          aria-label="previous"
          className="hidden"
          onClick={() => paginate(currentPage - 1)}
        >
          <BsArrowLeft size={23} />
        </StyledButton>
      )}
      {paginationRange &&
        paginationRange.map((item, index) => {
          if (item === DOTS) {
            return <StyledButton key={index}>&#8230;</StyledButton>;
          }
          return (
            <StyledButton
              aria-label={`page ${item}`}
              key={index}
              onClick={changePage}
              className={currentPage === item ? 'active' : ''}
            >
              <span>{item}</span>
            </StyledButton>
          );
        })}

      {currentPage !== total && (
        <StyledButton
          aria-label="next"
          className="hidden"
          onClick={() => paginate(currentPage + 1)}
        >
          <BsArrowRight size={23} />
        </StyledButton>
      )}
    </PaginationContainer>
  );
};
