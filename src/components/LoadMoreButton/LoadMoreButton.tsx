import { FC } from 'react';
import { ButtonLoad } from './LoadMoreButton.styled';

type Props = {
  onClick: () => void;
};

export const LoadMoreButton: FC<Props> = ({ onClick }) => {
  return (
    <ButtonLoad type="button" onClick={onClick}>
      Load More
    </ButtonLoad>
  );
};
