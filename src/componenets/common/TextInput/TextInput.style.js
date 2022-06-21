import styled from 'styled-components';

const CustomInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 8px;
  border: ${({ borderStyle }) => borderStyle};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ theme }) => theme.color.gray1};

  & ::placeholder {
    color: ${({ theme }) => theme.color.gray1};
  }
`;

export default CustomInput;
