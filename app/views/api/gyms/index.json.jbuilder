@gyms.each do |gym|
  json.set! gym.id do
    json.extract! gym,  :id,
                        :name,
                        :address,
                        :city,
                        :state,
                        :zip,
                        :level,
                        :price,
                        :hours,
                        :phone,
                        :website_url,
                        :reviews
    json.image_url asset_path(gym.image_url)
  end
end
