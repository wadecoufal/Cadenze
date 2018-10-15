@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :user, :song_ids
  end
end
