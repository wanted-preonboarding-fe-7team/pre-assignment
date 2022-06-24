import { Logo, TextInput } from 'components/common';
import theme from 'styles/theme';

import ButtonArea from './ButtonArea';
import { GNBItems, GNBWrapper, SearchBar } from './GNB.styled';

const GNB = () => {
  return (
    <GNBWrapper>
      <GNBItems>
        <Logo size={2} />
        <SearchBar>
          <TextInput
            size={{ height: '40px', width: '100%' }}
            placeholder="검색"
            borderRadius={theme.border.radius.gnb}
          />
        </SearchBar>
        <ButtonArea />
      </GNBItems>
    </GNBWrapper>
  );
};

export default GNB;
