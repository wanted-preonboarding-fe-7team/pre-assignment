import { useEffect } from 'react';

import { css } from 'styled-components';

import { LoadingSpinner, Wrapper } from './Loading.styled';

const Loading = () => {
  useEffect(() => {
    document.body.style = css`
      position: relative;
      overflow: hidden;
    `;

    return () => {
      document.body.style = css`
        overflow: auto;
      `;
    };
  }, []);

  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
};

export default Loading;
