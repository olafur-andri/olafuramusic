import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import setTrackAction from '../../actions/trackActions';

const StopMusic = (props) => {
  const { currentTrack, setCurrentTrack } = props;

  const buttonRef = useRef(null);

  const isVisible = currentTrack !== '';

  // if (isVisible && buttonRef.current) buttonRef.current.focus();
  // else if (buttonRef.current) buttonRef.current.blur();

  return (
    <button
      type="button"
      className={isVisible ? styles.visibleStopButton : styles.stopMusicButton}
      onClick={() => setCurrentTrack('')}
      tabIndex={isVisible ? '1' : '-1'}
      ref={buttonRef}
    >
      <span className={styles.stopIcon} />
      Stop Music
    </button>
  );
};

StopMusic.propTypes = {
  currentTrack: PropTypes.string.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentTrack }) => ({ currentTrack });

export default connect(mapStateToProps, {
  setCurrentTrack: setTrackAction,
})(StopMusic);
