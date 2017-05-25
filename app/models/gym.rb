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

  # def self.in_bounds(bounds)
  #   Gym.where("lat > ?", bounds[:southwest][:lat])
  #       .where("lat < ?", bounds[:northeast][:lat])
  #       .where("lng > ?", bounds[:southwest][:lng])
  #       .where("lng < ?", bounds[:northeast][:lng])
  # end
end
