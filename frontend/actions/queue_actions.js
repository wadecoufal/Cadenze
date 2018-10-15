export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';

export const receiveQueue = queue => ({
  type: RECEIVE_QUEUE,
  queue
});
