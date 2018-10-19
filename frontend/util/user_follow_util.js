export const createUserFollow = followUserId => (
  $.ajax({
    method: 'POST',
    url: 'api/user_follows',
    data: {user_follow: {followee_id: followUserId}}
  })
)

export const deleteUserFollow = followUserId => (
  $.ajax({
    method: "DELETE",
    url: `api/user_follows/${followUserId}`,
    data: {unfollow_user_id: followUserId}
  })
)
