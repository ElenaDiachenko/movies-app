import ReactPlayer, { ReactPlayerProps } from 'react-player';
const BaseYoutubeURL = 'https://www.youtube.com/watch?v=';

export const Player: React.FC<ReactPlayerProps> = props => {
  const { url } = props;
  return (
    <ReactPlayer
      url={BaseYoutubeURL + url}
      controls
      width="100%"
      height="100%"
    />
  );
};
