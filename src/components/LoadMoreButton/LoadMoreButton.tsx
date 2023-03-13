import { ButtonLoad } from './LoadMoreButton.styled';

type Props = {
  onClick: () => void;
};

export const LoadMoreButton = ({ onClick }: Props) => {
  return (
    <ButtonLoad type="button" onClick={onClick}>
      Load More
    </ButtonLoad>
  );
};
