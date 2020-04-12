import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import styles from './styles.module.css';

const PortfolioAlbum = (props) => {
  const {
    name, slug, tracks, number,
  } = props;

  return (
    <div className={styles.albumContainer} style={{ zIndex: number }}>
      <Parallax
        className={styles.albumArtContainer}
        y={[-40, 40]}
        tagOuter="figure"
      >
        <img
          className={styles.albumArt}
          src={`/images/album-arts/${slug}.png`}
          alt={name}
        />
      </Parallax>

      <div className={styles.tracksContainer}>
        Some tracks here
      </div>
    </div>
  );
};

PortfolioAlbum.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  number: PropTypes.number.isRequired,
};

export default PortfolioAlbum;
