import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { requests } from 'services/API';
import { IVideoResultDTO } from 'interfaces/IVideoDTO';
import { Loader } from '../Loader/Loader';
import { Player } from 'components/Player/Player';
import { Container, StyledItem } from './VideoList.styled';

const VideoList = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState<IVideoResultDTO[] | []>([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;
    try {
      setStatus('pending');
      (async function getReviews() {
        const data = await requests.fetchVideo(movieId);
        if (data.length === 0) {
          setStatus('rejected');
          toast.info('Sorry, there are no videos');
          return;
        }
        setStatus('resolved');
        setVideos(data);
      })();
    } catch (error) {
      setStatus('rejected');
      console.log((error as AxiosError).message);
    }
  }, [movieId]);

  return (
    <>
      {status === 'rejected' && null}
      {status === 'resolved' && (
        <Container>
          {videos.map(it => (
            <StyledItem key={it.id}>
              <Player url={it.key} />
            </StyledItem>
          ))}
        </Container>
      )}
    </>
  );
};

export default VideoList;
