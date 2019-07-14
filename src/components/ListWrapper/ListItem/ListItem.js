import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';

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
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <a
          href={twitterLink}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.button}
        >
          visit twitter page
        </a>
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
