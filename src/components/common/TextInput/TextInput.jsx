import { forwardRef, useState } from 'react';

import theme from 'styles/theme';
import checkValidInput from 'utils/checkValidInput';

import CustomInput from './TextInput.style';

const borderStyles = {
  error: `2px solid ${theme.color.red}`,
};

const TextInput = forwardRef(
  (
    { placeholder, size, borderStyle, borderRadius, type = 'text', id },
    ref
  ) => {
    const [inputText, setInputText] = useState('');
    const [isValidInput, setIsValidInput] = useState(false);

    const onChange = ({ target }) => {
      setInputText(target.value);
      setIsValidInput(checkValidInput[id](target.value));
      console.log(checkValidInput[id](target.value), target.value);
    };

    return (
      <CustomInput
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        width={size.width}
        height={size.height}
        borderStyle={
          (inputText && isValidInput) || !inputText
            ? borderStyle
            : borderStyles.error
        }
        borderRadius={borderRadius}
        value={inputText}
        ref={ref}
      />
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
