class Review < ApplicationRecord
  validates :user_id, :gym_id, :body, :rating, presence: true

  belongs_to :user
  belongs_to :gym
end
