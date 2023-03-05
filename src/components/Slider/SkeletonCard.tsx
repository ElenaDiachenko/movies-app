import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
   50% {
        opacity: .5;
    }
`;
const SkeletonBox = styled.div`
  overflow: hidden;
  white-space: nowrap;
  padding: ${p => p.theme.space[4]}px 20px ${p => p.theme.space[4]}px;
`;

const StyledSkeleton = styled.div`
  display: inline-block;

  margin-right: 20px;
  height: 213px;
  width: 160px;
  background-color: rgb(199, 199, 199, 0.7);
  border-radius: 4px;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  padding: 8px;
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
    <SkeletonBox>
      {array.map((it, idx) => (
        <StyledSkeleton key={idx} />
      ))}
    </SkeletonBox>
  );
};
