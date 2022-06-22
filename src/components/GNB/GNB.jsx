import { Logo, TextInput } from 'components/common';
import theme from 'styles/theme';

import ButtonArea from './ButtonArea';
import { GNBWrapper, SearchBar } from './GNB.styled';

const GNB = () => {
  return (
    <GNBWrapper>
      <div className="gnb-items flex">
        <Logo size={2} />
        <SearchBar>
          <TextInput
            size={{ height: '40px', width: '100%' }}
            placeholder="검색"
            borderRadius={theme.border.radius.gnb}
          />
        </SearchBar>
        <ButtonArea />
      </div>
    </GNBWrapper>
  );
};

export default GNB;
