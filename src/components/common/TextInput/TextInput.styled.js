import styled from 'styled-components';

const CustomInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 8px;
  border-radius: ${({
    theme: {
      border: { radius },
    },
  }) => radius.input};
  background-color: ${({ theme: { color } }) => color.gray1};

  & ::placeholder {
    color: ${({ theme: { color } }) => color.gray1};
  }
`;

export default CustomInput;
