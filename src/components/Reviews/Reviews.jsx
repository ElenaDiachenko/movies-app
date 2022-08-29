import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { fetchReviews } from 'services/API';
import { Container, Item, AuthorName, Content } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    try {
      setStatus('pending');
      (async function getReviews() {
        const data = await fetchReviews(movieId);
        if (data.length === 0) {
          setStatus('rejected');
          toast.info('Sorry, there are no cast yet');
          return;
        }
        setStatus('resolved');
        setReviews(data);
      })();
    } catch (error) {
      setStatus('rejected');
      console.log(error.message);
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

Reviews.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};

export default Reviews;
