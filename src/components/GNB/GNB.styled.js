import styled from 'styled-components';

const GNBWrapper = styled.div`
  height: ${({ theme: { gnb } }) => gnb.height};
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${({ theme: { color } }) => color.white};
  border-bottom: 1px solid ${({ theme: { color } }) => color.gray3};

  .gnb-items {
    width: 100%;
    max-width: ${({ theme: { gnb } }) => gnb.width};
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 ${({ theme: { gnb } }) => gnb.padding};
  }

  > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const SearchBar = styled.div`
  width: 240px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export { GNBWrapper, SearchBar };
