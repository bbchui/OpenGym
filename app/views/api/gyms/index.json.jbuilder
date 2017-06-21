
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
                          :lng,
                          :lat,
                          :website_url,
                          :reviews,
                          :image_url
    end
  end
