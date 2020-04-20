import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import styles from './styles.module.css';
import TrackPlayButton from '../TrackPlayButton';
import TrackPlayBar from '../TrackPlayBar';
import setCurrentTrackAction from '../../actions/trackActions';

let isSeeking = false;

const setIsSeeking = (value) => { isSeeking = value; };

const Track = (props) => {
  const {
    tracksColor, name, minutes, seconds, year, id, currentTrack,
    setCurrentTrack, tabIndex,
  } = props;

  const [position, setPosition] = useState(0);
  const playerRef = useRef(null);

  const isPlaying = currentTrack === id;
  const url = `http://www.youtube.com/v/${id}?version=3`;

  const onPlay = () => {
    if (isPlaying) setCurrentTrack('');
    else setCurrentTrack(id);
  };

  const onVideoProgress = (e) => {
    if (isSeeking) return;
    setPosition(e.playedSeconds);
  };

  return (
    <div className={styles.trackContainer}>
      <TrackPlayButton
        color={tracksColor}
        onClick={onPlay}
        isPlaying={isPlaying}
        tabIndex={tabIndex}
      />

      <div className={styles.trackInfoContainer}>
        {/* Track name */}
        <h6
          className={styles.trackName}
          style={{ color: tracksColor }}
        >
          {name}
        </h6>

        {/* Track length and year */}
        <p
          className={styles.trackLengthYear}
          style={{ color: tracksColor }}
        >
          {`${minutes}:${seconds.toString().padStart(2, '0')}`}
          &nbsp;&bull;&nbsp;
          {year}
        </p>

        {/* Track play bar */}
        <TrackPlayBar
          onSeek={(newPosition) => playerRef.current.seekTo(newPosition)}
          duration={minutes * 60 + seconds}
          backgroundColor={tracksColor}
          isPlaying={isPlaying}
          position={position}
          setPosition={setPosition}
          setIsSeeking={setIsSeeking}
          tabIndex={tabIndex}
          onPlay={onPlay}
        />

        <ReactPlayer
          url={url}
          playing={isPlaying}
          width={0}
          height={0}
          style={{ display: 'none' }}
          onProgress={onVideoProgress}
          onEnded={() => setCurrentTrack('')}
          onPause={() => { if (isPlaying) setCurrentTrack(''); }}
          onPlay={() => setCurrentTrack(id)}
          progressInterval={500}
          ref={playerRef}
        />
      </div>
    </div>
  );
};

Track.propTypes = {
  tracksColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  currentTrack: PropTypes.string.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  tabIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const mapStateToProps = (storeState) => ({
  currentTrack: storeState.currentTrack,
});

export default connect(mapStateToProps, {
  setCurrentTrack: setCurrentTrackAction,
})(Track);
