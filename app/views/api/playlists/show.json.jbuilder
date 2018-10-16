json.extract! @playlist, :title, :song_ids, :id
json.user @playlist.user.extract! user, :id, :username
