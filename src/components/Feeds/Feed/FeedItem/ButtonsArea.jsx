import { Icon } from 'components/common';

import { Buttons, Wrapper } from './ButtonsArea.styled';

const FeedButtonsArea = () => {
  return (
    <Wrapper>
      <Buttons>
        <Icon icon="heart" />
        <Icon icon="comment" />
        <Icon icon="message" />
      </Buttons>
      <Buttons>
        <Icon icon="bookmark" />
      </Buttons>
    </Wrapper>
  );
};

export default FeedButtonsArea;
