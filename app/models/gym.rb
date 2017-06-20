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

  def self.in_bounds(bounds)
    Gym.where("lat > ?", bounds[:southwest][:lat])
        .where("lat < ?", bounds[:northeast][:lat])
        .where("lng > ?", bounds[:southwest][:lng])
        .where("lng < ?", bounds[:northeast][:lng])
  end

  # def self.find_by_query(city, state)
  #   if city == ""
  #     gyms = Gym.where(city: 'San Francisco').limit(10)
  #   else
  #     gyms = Gym
  #       .where('lower(city) LIKE ?', "%#{params[:query]}%".downcase)
  #       .where('lower(state) LIKE ?', "%#{params[:query]}".downcase)
  #   end
  # end
end
