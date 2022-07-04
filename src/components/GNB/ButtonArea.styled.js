const { default: styled } = require('styled-components');

const ButtonAreaWrapper = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: block;
  }

  @media screen and (max-width: 640px) {
    gap: 0.7rem;
  }
`;

export default ButtonAreaWrapper;
