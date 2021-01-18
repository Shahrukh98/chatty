import React, { FC } from 'react';
import { View, Text } from 'react-native';
import StyledComponents from 'styled-components';

interface HeaderProps {
   onBack: () => {};
   display: string;
   name: string;
   onRight?: () => {};
   onRightIcon?: () => {};
}

const Header: FC<HeaderProps> = (props) => {
   return null;
};

export default Header;
