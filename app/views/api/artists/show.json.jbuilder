json.extract! @artist, :id, :name, :bio, :album_ids, :song_ids
json.photoUrl url_for(@artist.photo)
