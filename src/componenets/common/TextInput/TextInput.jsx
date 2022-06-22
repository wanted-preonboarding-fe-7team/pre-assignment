import { forwardRef, useState } from 'react';

import CustomInput from './TextInput.style';

const TextInput = forwardRef(
  ({ placeholder, size, borderStyle, borderRadius, type = 'text' }, ref) => {
    const [inputText, setInputText] = useState('');

    const onChange = ({ target }) => {
      setInputText(target.value);
    };

    return (
      <CustomInput
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        width={size.width}
        height={size.height}
        borderStyle={borderStyle}
        borderRadius={borderRadius}
        value={inputText}
        ref={ref}
      />
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
