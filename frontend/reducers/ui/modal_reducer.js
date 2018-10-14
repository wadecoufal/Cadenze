import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return 'playlistModal';
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer;
