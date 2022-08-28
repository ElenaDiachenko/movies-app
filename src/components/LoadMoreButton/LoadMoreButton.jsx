import { ButtonLoad } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <ButtonLoad type="button" onClick={onClick}>
      Load More
    </ButtonLoad>
  );
};
