export const fetchFollows = currUserId => (
  $.ajax({
    method: "GET",
    url: "api/follows"
  })
);
