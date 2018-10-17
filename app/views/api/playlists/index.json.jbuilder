@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :song_ids
    json.set! 'user' do
      json.extract! playlist.user, :username, :id
    end
  end
end
