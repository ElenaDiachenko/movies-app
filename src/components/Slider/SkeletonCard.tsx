import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
   50% {
        opacity: .5;
    }
`;

const StyledSkeleton = styled.div`
  height: 213px;
  width: 160px;
  background-color: rgb(199, 199, 199, 0.7);
  border-radius: 0.25rem;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  margin: 8px;
  @media screen and (min-width: 640px) {
    width: 200px;
    height: 267px;
  }
  @media screen and (min-width: 768px) {
    width: 240px;
    height: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 273px;
  }
  @media screen and (min-width: 1534px) {
    width: 320px;
    height: 427px;
  }
`;
export const SkeletonCard = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {array.map((it, idx) => (
        <StyledSkeleton key={idx} />
      ))}
    </div>
  );
};
