import { useContext, forwardRef, useState } from 'react';

import { LoginContext } from 'context/context';
import theme from 'styles/theme';
import checkValidInput from 'utils/checkValidInput';

import CustomInput from './TextInput.styled';

const borderStyles = {
  error: `2px solid ${theme.color.red}`,
};

const TextInput = forwardRef(
  (
    { placeholder, size, borderStyle, borderRadius, type = 'text', id },
    ref
  ) => {
    const { isValidInput, setIsValidInput } = useContext(LoginContext);

    const [inputText, setInputText] = useState('');

    const onChange = ({ target }) => {
      const inputValue = target.value;

      setInputText(inputValue);
      setIsValidInput[id](checkValidInput[id](inputValue));
    };

    return (
      <CustomInput
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        width={size.width}
        height={size.height}
        borderStyle={
          (inputText && isValidInput[id]) || !inputText
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
