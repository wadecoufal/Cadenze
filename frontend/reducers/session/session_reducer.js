const _nullUser = {
  id: null
}

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
