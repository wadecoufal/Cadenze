json.extract! artist, :id, :name, :album_ids, :song_ids
json.songIds artist.song_ids
json.photoUrl url_for(artist.photo)
