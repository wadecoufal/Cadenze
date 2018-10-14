json.extract! @artist, :id, :name, :bio
json.albumIds @artist.album_ids
json.photoUrl url_for(@artist.photo)
