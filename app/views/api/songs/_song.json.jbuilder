json.extract! song, :title, :artist, :album, :duration, :id
json.soundUrl url_for(song.song)
