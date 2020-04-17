import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const TrackPlayBar = (props) => {
  const {
    onSeek, duration, backgroundColor, position, setPosition,
    setIsSeeking,
  } = props;

  const containerRef = useRef(null);

  const updateThumbPosition = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const mouseX = e.clientX || e.nativeEvent.clientX;
    const containerLeft = containerRef.current.getBoundingClientRect().left;
    let offsetX = mouseX - containerLeft;
    offsetX = offsetX < 0 ? 0 : offsetX;
    offsetX = offsetX > containerWidth ? containerWidth : offsetX;
    const newPosition = Math.floor((offsetX / containerWidth) * duration);
    setPosition(newPosition);
    return newPosition;
  };

  const onMove = (e) => {
    e.preventDefault();
    updateThumbPosition(e);
  };

  const onEnd = (e) => {
    setIsSeeking(false);
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onEnd);
    const newPosition = updateThumbPosition(e);
    onSeek(newPosition);
  };

  const onStart = (e) => {
    setIsSeeking(() => true);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    updateThumbPosition(e);
  };

  return (
    <div
      className={styles.barContainer}
      onMouseDown={onStart}
      role="button"
      tabIndex="0"
      ref={containerRef}
    >
      <div className={styles.barBackground} style={{ backgroundColor }} />

      <div
        className={styles.barThumb}
        style={{
          backgroundColor,
          left: `${(position / duration) * 100}%`,
        }}
      />

      <div
        className={styles.barProgress}
        style={{
          backgroundColor,
          width: `${(position / duration) * 100}%`,
        }}
      />
    </div>
  );
};

TrackPlayBar.propTypes = {
  onSeek: PropTypes.func.isRequired,
  // The duration of the track (in seconds)
  duration: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  setPosition: PropTypes.func.isRequired,
  setIsSeeking: PropTypes.func.isRequired,
};

export default TrackPlayBar;
