import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Track from '../Track';

const TracksCarousel = (props) => {
  const { tracksColor, tracks } = props;

  return (
    <div className={styles.tracksContainer}>
      {tracks.map((track) => (
        <Track
          tracksColor={tracksColor}
          name={track.name}
          minutes={track.minutes}
          seconds={track.seconds}
          year={track.year}
          id={track.id}
          key={track.id}
        />
      ))}
    </div>
  );
};

TracksCarousel.propTypes = {
  tracksColor: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default TracksCarousel;
