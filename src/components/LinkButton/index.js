import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const LinkButton = (props) => {
  const {
    anchorText, href, className, isAnchor,
  } = props;

  console.log('isAnchor:', isAnchor);

  return isAnchor
    ? (
      <a
        href={href}
        className={`${styles.link} ${className}`}
      >
        {anchorText}
      </a>
    )
    : (
      <NavLink
        exact
        to={href}
        className={`${styles.link} ${className}`}
      >
        {anchorText}
      </NavLink>
    );
};

LinkButton.propTypes = {
  anchorText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  isAnchor: PropTypes.bool,
};

LinkButton.defaultProps = {
  className: '',
  isAnchor: false,
};

export default LinkButton;
