import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link
          to="/"
          className={useLocation().pathname === '/' ? 'selected' : ''}
        >
          Listagem
        </Link>
        <Link
          to="/import"
          className={useLocation().pathname === '/import' ? 'selected' : ''}
        >
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
