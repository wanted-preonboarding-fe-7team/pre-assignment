const { css } = require('styled-components');

const flexCenterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ellipsisStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { flexCenterStyle, ellipsisStyle };
