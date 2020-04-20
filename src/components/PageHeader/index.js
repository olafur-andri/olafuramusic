import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const getSubtitle = (subtitle) => (
  <h5 className={styles.subtitle}>
    {subtitle.slice(0, subtitle.length - 1)}
    <span className={styles.lastLetter}>
      {subtitle.charAt(subtitle.length - 1)}
    </span>
  </h5>
);

const PageHeader = (props) => {
  const { subtitle, className } = props;

  return (
    <header className={`${styles.pageHeader} ${className}`}>
      <h4 className={styles.logoText}>ÓLAFUR ANDRI</h4>
      {getSubtitle(subtitle)}
    </header>
  );
};

PageHeader.propTypes = {
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

PageHeader.defaultProps = {
  subtitle: '',
  className: '',
};

export default PageHeader;
