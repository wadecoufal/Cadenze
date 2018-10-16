// takes in follows slice of state
// returns the followee_id of each follow object that matches follow_type

export const filterFollows = (follows, follow_type) => {
  let arrayIds = [];
  for (let i = 0; i < follows.length; i++){
    if (follows[i].followee_type === follow_type) {
      arrayIds.push(follows[i].followee_id);
    }
  }
  return arrayIds;
}
