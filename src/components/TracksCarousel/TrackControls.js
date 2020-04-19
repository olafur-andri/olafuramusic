import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const prevIcon = (color) => (
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="
        M0.312437 7.24062L7.24071 0.312348C7.65718 -0.104116 8.28997
        -0.104116 8.71445 0.312348C9.13091 0.728812 9.13091 1.36161
        8.71445 1.78617L2.6272 7.87342L8.71445 13.9607C9.13091 14.3771
        9.13091 15.0099 8.71445 15.4344C8.50621 15.6426 8.29798
        15.7467 7.97753 15.7467C7.7693 15.7467 7.44885 15.6426 7.1366
        15.5385L0.312437 8.71436C0.104205 8.50612 -4.76837e-06 8.29789
        -4.76837e-06 7.97744C-4.76837e-06 7.66509 0.104113 7.44885
        0.312437 7.24062Z
      "
      fill={color}
    />
  </svg>
);

const nextIcon = (color) => (
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="
        M8.71436 7.24062L1.78608 0.312348C1.36962 -0.104116 0.736821
        -0.104116 0.312348 0.312348C-0.104116 0.728812 -0.104116
        1.36161 0.312348 1.78617L6.39959 7.87342L0.312348
        13.9607C-0.104116 14.3771 -0.104116 15.0099 0.312348
        15.4344C0.52058 15.6426 0.728811 15.7467 1.04926
        15.7467C1.25749 15.7467 1.57794 15.6426 1.8902 15.5385L8.71436
        8.71436C8.92259 8.50612 9.0268 8.29789 9.0268 7.97744C9.0268
        7.66509 8.92268 7.44885 8.71436 7.24062Z
      "
      fill={color}
    />
  </svg>
);

const getDots = (numOfPages, currPage, color) => {
  const dots = [];

  for (let i = 0; i < numOfPages; i += 1) {
    dots.push(
      <div
        className={styles.controlDot}
        style={{
          border: `1.5px solid ${color}`,
          backgroundColor: i === currPage ? color : '#FFFFFF',
        }}
        key={i}
      />,
    );
  }

  return dots;
};

const TrackControls = (props) => {
  const {
    onNext, onPrev, currPage, tracksColor, numOfPages,
  } = props;

  return (
    <div className={styles.controlsContainer}>
      {/* Next page */}
      <button
        type="button"
        onClick={onPrev}
        className={styles.controlButton}
      >
        {prevIcon(tracksColor)}
      </button>

      {/* Dots */}
      {getDots(numOfPages, currPage, tracksColor)}

      {/* Prev page */}
      <button
        type="button"
        onClick={onNext}
        className={styles.controlButton}
      >
        {nextIcon(tracksColor)}
      </button>
    </div>
  );
};

TrackControls.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  currPage: PropTypes.number.isRequired,
  tracksColor: PropTypes.string.isRequired,
  numOfPages: PropTypes.number.isRequired,
};

export default TrackControls;
