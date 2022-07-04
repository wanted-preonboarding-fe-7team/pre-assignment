import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.header`
  margin: 0 auto;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 975px;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const Search = styled.input`
  padding: 0.5rem 0.7rem;
  width: 280px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 100;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  ::placeholder {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const IconList = styled.ul`
  display: flex;
`;

export const Icon = styled.li`
  display: flex;
  margin-right: 12px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
`;
