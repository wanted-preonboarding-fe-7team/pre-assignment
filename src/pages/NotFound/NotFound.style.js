import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  height: 100vh;
  flex-direction: column;

  .message {
    font-size: 2rem;
  }

  .home-link {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme: { color } }) => color.white};
    padding: 1.5rem;
    margin-top: 2rem;
    background-color: ${({ theme: { color } }) => color.blue2};
    border-radius: 1rem;

    > :not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export default NotFoundWrapper;
