export const fetchFollows = currUserId => (
  $.ajax({
    method: "GET",
    url: "api/follows",
    currUserId
  })
);

export const createFollow = follow => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {follow}
  })
};

export const deleteFollow = id => (
  $.ajax({
    method: "DELETE",
    url: `api/follows/${id}`
  })
);
