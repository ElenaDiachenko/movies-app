import { Box } from 'components/Box';
import { BackLink } from '../BackLink/BackLink';

const NotFound = () => {
  return (
    <Box as="div" p="4" display="flex">
      <BackLink to="/">Go home</BackLink>
      <Box
        as="b"
        textAlign="center"
        mx="auto"
        mt="5"
        fontSize="l"
        color="orangered"
      >
        Page couldn't be found.
      </Box>
    </Box>
  );
};

export default NotFound;
