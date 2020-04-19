import React from 'react';
import styles from './styles.module.css';
import SocialLink from './SocialLink';

const Footer = () => (
  <div className={styles.footerContainer}>
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

export default Footer;
