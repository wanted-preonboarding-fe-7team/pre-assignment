import styled from 'styled-components';

export const Li = styled.li`
  margin-bottom: 0.4rem;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  & > p {
    font-weight: 500;
  }
`;

export const Nickname = styled.span`
  margin-right: 12px;

  font-weight: bold;
`;
