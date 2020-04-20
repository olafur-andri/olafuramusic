import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import SocialLink from './SocialLink';

const Footer = ({ className }) => (
  <div className={`${styles.footerContainer} ${className}`}>
    <h3 className={styles.footerLogo}>ÓLAFUR ANDRI</h3>

    <div className={styles.linkContainer}>
      {/* Spotify */}
      <SocialLink
        image="spotify"
        altText="Spotify"
        linkUrl="https://open.spotify.com/artist/0i6oObeqD3Tueuq0nLWQ50"
      />

      {/* YouTube */}
      <SocialLink
        image="youtube"
        altText="Youtube"
        linkUrl="https://www.youtube.com/channel/UCtuwnopjUjZnKhpZEeNJx_Q"
      />

      {/* Twitter */}
      <SocialLink
        image="twitter"
        altText="Twitter"
        linkUrl="https://twitter.com/olafuramusic"
      />

      {/* Facebook */}
      <SocialLink
        image="facebook"
        altText="Facebook"
        linkUrl="https://www.facebook.com/olafur.andri.77"
      />
    </div>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
