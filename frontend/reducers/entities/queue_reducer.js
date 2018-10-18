import {
  RECEIVE_QUEUE
} from '../../actions/queue_actions';

const defaultQueue = [{cover: window.darkDoor,
url: window.darkDoorSong,
songId: 1,
artist: {
  name: 'Victoire',
  song: 'A Door in the Dark'
}}];

const queueReducer = (state = defaultQueue, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUEUE:
      return action.queue;
    default:
      return state;
  }
}

export default queueReducer;
