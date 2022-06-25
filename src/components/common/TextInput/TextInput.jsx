import { forwardRef, useState } from 'react';

import CustomInput from './TextInput.styled';

const TextInput = forwardRef(
  (
    {
      placeholder,
      size: { width, height },
      onChange: onChangeHandler,
      type = 'text',
      inputValue,
      className,
    },
    ref
  ) => {
    const [inputText, setInputText] = useState('');

    const handleOnChange = ({ target }) => {
      if (onChangeHandler) {
        onChangeHandler({ target });
        return;
      }

      const inputValue = target.value;
      setInputText(inputValue);
    };

    return (
      <CustomInput
        type={type}
        onChange={handleOnChange}
        placeholder={placeholder}
        width={width}
        height={height}
        value={inputValue || inputText}
        className={className}
        ref={ref}
      />
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
