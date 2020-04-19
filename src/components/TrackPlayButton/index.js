import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const playIcon = (color) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="
        M22.5712 11.4614L9.57896 3.45179C8.639 2.87304 7.50256 2.84898
        6.53892 3.38742C5.57529 3.92577 5 4.90637 5 6.01028V21.9565C5
        23.6257 6.34477 24.9909 7.99759 25C8.0021 25 8.00661 25
        8.01104 25C8.52755 25 9.0658 24.8381 9.56852 24.5313C9.97294
        24.2845 10.1008 23.7566 9.85401 23.3521C9.60727 22.9476
        9.07933 22.8198 8.67504 23.0666C8.4399 23.21 8.21026 23.2843
        8.00683 23.2842C7.38321 23.2808 6.7155 22.7465 6.7155
        21.9566V6.01032C6.7155 5.53676 6.96229 5.11623 7.3756
        4.88527C7.78896 4.65431 8.27638 4.66462 8.67908 4.9126L21.6714
        12.9222C22.0619 13.1627 22.2853 13.5636 22.2844
        14.0222C22.2835 14.4808 22.0584 14.8809 21.6657
        15.1205L12.2722 20.8727C11.8682 21.1201 11.7412 21.6482
        11.9886 22.0523C12.2359 22.4563 12.764 22.5833 13.168
        22.3359L22.5604 16.5845C23.4597 16.0358 23.9978 15.0793 24
        14.0257C24.0021 12.9722 23.4678 12.0135 22.5712 11.4614Z
      "
      fill={color}
    />
  </svg>
);

const pauseIcon = (color) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.buttonIcon}
  >
    <g clipPath="url(#clip0)">
      <path
        d="
          M13.9999 0.000915527C6.28037 0.000915527 0 6.28116 0 14.0006C0 21.7201 6.28037
          28.0004 13.9999 28.0004C21.7195 28.0004 28 21.7201 28 14.0006C28 6.28116
          21.7195 0.000915527 13.9999 0.000915527ZM13.9999 26.2177C7.26325 26.2177
          1.78274 20.7372 1.78274 14.0006C1.78274 7.26405 7.26325 1.78366 13.9999
          1.78366C20.7366 1.78366 26.2173 7.26405 26.2173 14.0006C26.2173 20.7372
          20.7365 26.2177 13.9999 26.2177Z
        "
        fill={color}
      />
      <path
        d="
          M16.6192 8.11243C16.1268 8.11243 15.7278 8.5114 15.7278 9.0038V18.9962C15.7278
          19.4886 16.1268 19.8876 16.6192 19.8876C17.1116 19.8876 17.5106 19.4886
          17.5106 18.9962V9.0038C17.5106 8.5114 17.1116 8.11243 16.6192 8.11243Z
        "
        fill={color}
      />
      <path
        d="
          M11.3808 8.11243C10.8884 8.11243 10.4894 8.5114 10.4894 9.0038V18.9962C10.4894
          19.4886 10.8884 19.8876 11.3808 19.8876C11.8732 19.8876 12.2722 19.4886
          12.2722 18.9962V9.0038C12.2722 8.5114 11.8731 8.11243 11.3808 8.11243Z
        "
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TrackPlayButton = (props) => {
  const {
    color, onClick, isPlaying, className, tabIndex,
  } = props;

  return (
    <button
      type="button"
      className={`${styles.playButton} ${className}`}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {isPlaying ? pauseIcon(color) : playIcon(color)}
    </button>
  );
};

TrackPlayButton.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  tabIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  className: PropTypes.string,
};

TrackPlayButton.defaultProps = {
  className: '',
};

export default TrackPlayButton;
