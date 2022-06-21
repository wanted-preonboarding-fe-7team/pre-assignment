import { useState } from 'react';

import styled from 'styled-components';

const TextInput = ({ placeholder, size, borderStyle, borderRadius }) => {
  const [inputText, setInputText] = useState('');

  const onChange = ({ target }) => {
    setInputText(target.value);
  };

  return (
    <CustomInput
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      width={size.width}
      height={size.height}
      borderStyle={borderStyle}
      borderRadius={borderRadius}
      value={inputText}
    />
  );
};

export default TextInput;

const CustomInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ borderStyle }) => borderStyle};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ theme }) => theme.color.gray1};

  & ::placeholder {
    color: ${({ theme }) => theme.color.gray1};
  }
`;
