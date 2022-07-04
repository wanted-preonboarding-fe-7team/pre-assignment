import Wrapper from './LikedArea.styled';

const LikedArea = ({ likeCount }) => {
  return <Wrapper>좋아요 {likeCount.toLocaleString()}개</Wrapper>;
};

export default LikedArea;
