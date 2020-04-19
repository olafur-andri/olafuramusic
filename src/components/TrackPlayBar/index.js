import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

// let globalPosition = 0;

// const TrackPlayBar = (props) => {
//   const {
//     onSeek, duration, backgroundColor, position, setPosition,
//     setIsSeeking, tabIndex,
//   } = props;

//   const [thumbFocused, setThumbFocused] = useState(false);

//   globalPosition = position;

//   const containerRef = useRef(null);

//   const onKeyDown = (e) => {
//     const JUMP = 5;
//     const RIGHT_ARROW = 39;
//     const LEFT_ARROW = 37;

//     if (!thumbFocused) return;

//     let newPosition = globalPosition;

//     if (e.keyCode === RIGHT_ARROW) {
//       newPosition += JUMP;
//       newPosition = (newPosition > duration) ? duration : newPosition;
//     } else if (e.keyCode === LEFT_ARROW) {
//       newPosition -= JUMP;
//       newPosition = (newPosition < 0) ? 0 : newPosition;
//     }

//     setPosition(newPosition);
//   };

//   const updateThumbPosition = (e) => {
//     const containerWidth = containerRef.current.offsetWidth;
//     const mouseX = e.clientX || e.nativeEvent.clientX;
//     const containerLeft = containerRef.current.getBoundingClientRect().left;
//     let offsetX = mouseX - containerLeft;
//     offsetX = offsetX < 0 ? 0 : offsetX;
//     offsetX = offsetX > containerWidth ? containerWidth : offsetX;
//     const newPosition = Math.floor((offsetX / containerWidth) * duration);
//     setPosition(newPosition);
//     return newPosition;
//   };

//   const onMove = (e) => {
//     e.preventDefault();
//     updateThumbPosition(e);
//   };

//   const onEnd = (e) => {
//     setIsSeeking(false);
//     window.removeEventListener('mousemove', onMove);
//     window.removeEventListener('mouseup', onEnd);
//     const newPosition = updateThumbPosition(e);
//     onSeek(newPosition);
//   };

//   const onStart = (e) => {
//     setIsSeeking(() => true);
//     window.addEventListener('mousemove', onMove);
//     window.addEventListener('mouseup', onEnd);
//     updateThumbPosition(e);
//   };

//   return (
//     <div
//       className={styles.barContainer}
//       onMouseDown={onStart}
//       onMouseUp={onEnd}
//       role="button"
//       onFocus={() => setThumbFocused(true)}
//       onBlur={() => setThumbFocused(false)}
//       tabIndex={tabIndex}
//       ref={containerRef}
//     >
//       <div className={styles.barBackground} style={{ backgroundColor }} />

//       <div
//         className={styles.barThumb}
//         style={{
//           backgroundColor,
//           left: `${(position / duration) * 100}%`,
//         }}
//       />

//       <div
//         className={styles.barProgress}
//         style={{
//           backgroundColor,
//           width: `${(position / duration) * 100}%`,
//         }}
//       />
//     </div>
//   );
// };

class TrackPlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.containerRef = React.createRef();
  }

  onKeyDown(e) {
    const JUMP = 5;
    const RIGHT_ARROW = 39;
    const LEFT_ARROW = 37;
    const SPACE_BAR = 32;

    const {
      position, onSeek, duration, setPosition, onPlay,
    } = this.props;

    let newPosition = position;

    if (e.keyCode === RIGHT_ARROW) {
      newPosition += JUMP;
      newPosition = (newPosition > duration) ? duration : newPosition;
    } else if (e.keyCode === LEFT_ARROW) {
      newPosition -= JUMP;
      newPosition = (newPosition < 0) ? 0 : newPosition;
    } else if (e.keyCode === SPACE_BAR) {
      e.preventDefault();
      onPlay();
    }

    setPosition(newPosition);
    onSeek(newPosition);
  }

  onStart(e) {
    const { setIsSeeking } = this.props;
    setIsSeeking(true);
    window.addEventListener('mousemove', this.onMove);
    window.addEventListener('mouseup', this.onEnd);
    this.updateThumbPosition(e);
  }

  onMove(e) {
    e.preventDefault();
    this.updateThumbPosition(e);
  }

  onEnd(e) {
    const { setIsSeeking, onSeek } = this.props;
    setIsSeeking(false);
    window.removeEventListener('mousemove', this.onMove);
    window.removeEventListener('mouseup', this.onEnd);
    const newPosition = this.updateThumbPosition(e);
    onSeek(newPosition);
  }

  onFocus() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  onBlur() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  updateThumbPosition(e) {
    const { duration, setPosition } = this.props;
    const containerWidth = this.containerRef.current.offsetWidth;
    const mouseX = e.clientX || e.nativeEvent.clientX;
    const containerLeft = this.containerRef.current.getBoundingClientRect().left;
    let offsetX = mouseX - containerLeft;
    offsetX = offsetX < 0 ? 0 : offsetX;
    offsetX = offsetX > containerWidth ? containerWidth : offsetX;
    const newPosition = Math.floor((offsetX / containerWidth) * duration);
    setPosition(newPosition);
    return newPosition;
  }

  render() {
    const {
      duration, backgroundColor, position, tabIndex,
    } = this.props;

    return (
      <div
        className={styles.barContainer}
        onMouseDown={this.onStart}
        onMouseUp={this.onEnd}
        role="button"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        tabIndex={tabIndex}
        ref={this.containerRef}
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
  }
}

TrackPlayBar.propTypes = {
  onSeek: PropTypes.func.isRequired,
  // The duration of the track (in seconds)
  duration: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  setPosition: PropTypes.func.isRequired,
  setIsSeeking: PropTypes.func.isRequired,
  tabIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default TrackPlayBar;
