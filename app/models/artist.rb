# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  bio        :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, :bio, presence: true

  has_one_attached :photo
  has_many :albums
  
  has_many :songs,
  through: :albums,
  source: :songs
end
