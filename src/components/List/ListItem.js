import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({ name, description, image, twitterLink }) => {
  const ImageTag = image ? 'img' : 'div';

  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        className={image ? styles.image : styles.imageNone}
        alt={name}
      />
      <div>
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={twitterLink}>visit twitter link </Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  twitterLink: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  description: 'One of the React Creators',
  image: null
};

export default ListItem;
