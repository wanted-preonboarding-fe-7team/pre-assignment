import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    min-width: 0px;
    width: 95%;
  }
`;
