import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import TrackControls from './TrackControls';
import Track from '../Track';

const getPages = (tracks, numPerPage, tracksColor, numOfPages, currPage) => {
  let counter = 0;
  const pages = [];

  // Initialize 'pages' with necessary number of elements
  for (let i = 0; i < numOfPages; i += 1) {
    pages.push([]);
  }

  while (counter < tracks.length) {
    const index = Math.floor(counter / numPerPage);
    pages[index].push(
      <Track
        tracksColor={tracksColor}
        name={tracks[counter].name}
        minutes={tracks[counter].minutes}
        seconds={tracks[counter].seconds}
        year={tracks[counter].year}
        id={tracks[counter].id}
        tabIndex={index === currPage ? 0 : -1}
        key={tracks[counter].id}
      />,
    );

    counter += 1;
  }

  return pages.map((trackArray) => (
    <div
      className={styles.trackPage}
      key={trackArray[0].key}
    >
      {trackArray}
    </div>
  ));
};

const TracksCarousel = (props) => {
  const { tracksColor, tracks, numPerPage } = props;
  const [currPage, setCurrPage] = useState(0);

  const numOfPages = Math.ceil(tracks.length / numPerPage);
  const pages = getPages(tracks, numPerPage, tracksColor, numOfPages, currPage);
  const onPrev = () => { if (currPage > 0) setCurrPage(currPage - 1); };
  const onNext = () => { if (currPage < numOfPages - 1) setCurrPage(currPage + 1); };

  return (
    <div className={styles.tracksContainer}>
      <div className={styles.scrollContainer}>
        <div
          className={styles.scrollContent}
          style={{ transform: `translateX(-${currPage}00%)` }}
        >
          {pages}
        </div>
      </div>

      <TrackControls
        onPrev={onPrev}
        onNext={onNext}
        currPage={currPage}
        tracksColor={tracksColor}
        numOfPages={numOfPages}
      />
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
  numPerPage: PropTypes.number,
};

TracksCarousel.defaultProps = {
  numPerPage: 4,
};

export default TracksCarousel;
