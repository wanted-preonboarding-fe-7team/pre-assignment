import { useState } from 'react';

import CustomInput from './TextInput.style';

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
