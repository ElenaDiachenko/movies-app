import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { requests } from 'services/API';
import { Container, Item, AuthorName, Content } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
import { ReviewDataType } from 'interfaces/MovieDataTypes';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<ReviewDataType[] | []>([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;
    try {
      setStatus('pending');
      (async function getReviews() {
        const data = await requests.fetchReviews(movieId);
        if (data.length === 0) {
          setStatus('rejected');
          toast.info('Sorry, there are no reviews yet');
          return;
        }
        setStatus('resolved');
        setReviews(data);
      })();
    } catch (error) {
      setStatus('rejected');
      console.log((error as AxiosError).message);
    }
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && null}
      {status === 'resolved' && (
        <Container>
          {reviews.map(({ id, author, content }) => {
            return (
              <Item key={id}>
                <AuthorName>{author}</AuthorName>
                <Content>{content}</Content>
              </Item>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Reviews;
