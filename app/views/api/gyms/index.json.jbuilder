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
                        :image_url
    end
  end
