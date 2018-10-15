# == Schema Information
#
# Table name: follows
#
#  id            :bigint(8)        not null, primary key
#  follower_id   :integer          not null
#  followee_id   :integer          not null
#  followee_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, :followee_type, :followee_id, presence: true

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :User
end
