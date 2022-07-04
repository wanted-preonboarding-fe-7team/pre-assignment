import styled from 'styled-components';

const LogoText = styled.span`
  font-weight: 700;
  font-size: ${({ size }) => size}rem;
  font-style: italic;

  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export default LogoText;
