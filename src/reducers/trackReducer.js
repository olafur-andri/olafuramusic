import SET_CURRENT_TRACK from '../constants';

export default (store = '', action) => {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return action.payload;
    default:
      return store;
  }
};
