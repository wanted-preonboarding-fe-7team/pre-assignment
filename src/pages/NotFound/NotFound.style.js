import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const NotFoundWrapper = styled.div`
  height: 100vh;
  flex-direction: column;
`;

const Message = styled.span`
  font-size: 2rem;
`;

const HomeLink = styled(Link)`
  ${flexCenterStyle};
  font-size: 1.5rem;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { color } }) => color.white};
  padding: 1.5rem;
  margin-top: 2rem;
  background-color: ${({ theme: { color } }) => color.blue2};
  border-radius: 1rem;

  > :not(:first-child) {
    margin-left: 1rem;
  }
`;

export { NotFoundWrapper, HomeLink, Message };
