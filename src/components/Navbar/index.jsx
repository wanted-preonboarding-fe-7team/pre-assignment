import React from 'react';
import { Wrapper, Header, Logo, Search, IconList, Icon } from './style';
import { IoHomeSharp } from 'react-icons/io5';
import { ImCompass2 } from 'react-icons/im';
import { FiSend, FiPlusSquare, FiHeart, FiLogOut } from 'react-icons/fi';

const Navbar = ({ onLogOut }) => {
  return (
    <Wrapper>
      <Header>
        <Logo src="./images/logo.png" alt="logo"></Logo>
        <Search placeholder="검색" />
        <IconList>
          <Icon>
            <IoHomeSharp />
          </Icon>
          <Icon>
            <FiSend />
          </Icon>
          <Icon>
            <FiPlusSquare />
          </Icon>
          <Icon>
            <ImCompass2 />
          </Icon>
          <Icon>
            <FiHeart />
          </Icon>
          <Icon onClick={onLogOut}>
            <FiLogOut />
          </Icon>
        </IconList>
      </Header>
    </Wrapper>
  );
};

export default Navbar;
