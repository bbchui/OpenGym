class Review < ApplicationRecord
  validates :user, :gym, :body, :rating, presence: true

  belongs_to :user
  belongs_to :gym
end
