# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  duration   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :album_id, presence: true

  has_one_attached :song
  belongs_to :album
  has_many :playlist_songs

  has_one :artist,
    through: :album,
    source: :artist
end
