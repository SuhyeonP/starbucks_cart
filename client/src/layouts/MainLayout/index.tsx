import React, { ReactNode } from 'react';
import { MainLayoutStyled } from '../styles';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props): JSX.Element => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>;
};

export default MainLayout;
