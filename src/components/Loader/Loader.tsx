import { TailSpin } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <TailSpin color="#cc7c12" height={80} width={80} />
    </LoaderWrap>
  );
};
