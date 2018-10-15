json.extract! user, :id, :username, :playlist_ids, :follows
json.photoUrl url_for(user.photo)
