class Review < ApplicationRecord
  validates :user, :gym, :body, :rating, presence: true
  validates :body, length: {minimum: 10}

  belongs_to :user
  belongs_to :gym
end
