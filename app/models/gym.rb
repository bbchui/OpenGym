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
end
