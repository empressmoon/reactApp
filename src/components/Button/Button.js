import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, href, secondary }) => {
  const buttonClass = secondary ? styles.secondary : styles.button;
  return (
    <>
      {href ? (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={buttonClass}
        >
          {children}
        </a>
      ) : (
        <button className={buttonClass} type='submit'>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
