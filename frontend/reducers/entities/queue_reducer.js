import {
  RECEIVE_QUEUE
} from '../../actions/queue_actions';

const defaultQueue = [{cover: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8bc257a15bc03c916183ec7c0ce08bb53cb1c6c8/victoire_door.jpg",
url: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e22b2566f83f447de73f203f55da0065df624269/02+I+Am+Coming+for+My+Things+copy.m4a",
songId: 1,
artist: {
  name: 'I Am Coming for My Things',
  song: 'Victoire',
  songId: 1
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
