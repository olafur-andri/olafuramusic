import SET_CURRENT_TRACK from '../constants';

export default (trackId) => ({
  type: SET_CURRENT_TRACK,
  payload: trackId,
});
