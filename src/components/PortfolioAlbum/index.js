import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import styles from './styles.module.css';
import TracksCarousel from '../TracksCarousel';

const PortfolioAlbum = (props) => {
  const {
    slug, tracksColor, tracks, backColor, downloadLink,
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const wideUrl = `/images/album-wides/${slug}.png`;
  const narrowUrl = `/images/album-narrows/${slug}.png`;
  const image = new Image();
  const onLoad = () => setIsLoaded(true);
  image.addEventListener('load', onLoad);
  image.src = wideUrl;

  return (
    <div className={isLoaded ? styles.visibleContainer : styles.albumContainer}>
      <Parallax
        className={styles.albumArtContainer}
        y={[-30, 30]}
        tagOuter="figure"
        styleOuter={{ background: backColor, width: '100%' }}
        styleInner={{ width: '100%' }}
      >
        <div
          className={styles.albumArtWide}
          style={{ backgroundImage: `url('${wideUrl}')` }}
        />
        <div
          className={styles.albumArtNarrow}
          style={{ backgroundImage: `url('${narrowUrl}')` }}
        />
      </Parallax>

      <div className={styles.albumTracksContainer}>
        <TracksCarousel
          tracks={tracks}
          tracksColor={tracksColor}
        />

        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonLink}
          style={{
            borderColor: tracksColor,
            color: tracksColor,
          }}
        >
          Download Album
        </a>
      </div>
    </div>
  );
};

PortfolioAlbum.propTypes = {
  slug: PropTypes.string.isRequired,
  tracksColor: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  backColor: PropTypes.string.isRequired,
  downloadLink: PropTypes.string.isRequired,
};

export default PortfolioAlbum;
