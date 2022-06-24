import styled from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
`;

const Buttons = styled.div`
  > :not(:last-child) {
    margin-right: 1rem;
  }
`;

export { Wrapper, Buttons };
