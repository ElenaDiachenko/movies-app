import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/APP';
import { Container, Item, AuthorName, Content } from './Reviews.styled';
import { Box } from 'components/Box';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      (async function getReviews() {
        const data = await fetchReviews(movieId);
        setReviews(data);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
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
      ) : (
        <Box>
          <h3>Sorry, this movie has no reviews yet.</h3>
        </Box>
      )}
    </>
  );
};

export default Reviews;
