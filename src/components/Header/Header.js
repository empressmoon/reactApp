import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = () => (
  <header className={styles.wrapper}>
    <img className='logo' src={logoImage} alt='FAvNote logo' />
    <HeaderNavigation />
    <Button secondary>new item</Button>
  </header>
);

export default Header;
