import {
  RECEIVE_QUEUE
} from '../../actions/queue_actions';

const defaultQueue = [{url: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBSQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--361e519fe9d6bd267ce3bdb6286ffd80c6fce274/fileNumber1",
cover: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8e1fc061e1b2b0e51ffa6a02508d31e38e9ff885/rite_of_spring.jpg",
songId: 1,
artist: {
  name: 'Bernstein',
  song: 'Rite',
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
