class Gym < ApplicationRecord
  validates :name,
            :address,
            :city,
            :state,
            :zip,
            :level,
            :price,
            :hours,
            presence: true

  has_many :reviews
end
