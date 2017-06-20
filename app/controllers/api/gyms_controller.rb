class Api::GymsController < ApplicationController
  def index
    # debugger
    if params[:query] == ""
      @gyms = Gym.where(city: 'San Francisco').limit(10)
    elsif params[:query]
      @gyms = Gym.where('lower(city) LIKE ?', "%#{params[:query]}%".downcase)
    else
      # @gyms = Gym.where(city: 'San Francisco').limit(1)
      @gyms = Gym.limit(1)
    end
    render :index
  end

  def create
    @gym = Gym.new(gym_params)
    if @gym.save
      render :show
    else
      render json: @gym.errors.full_messages, status: 422
    end
  end

  def show
    @gym = Gym.find(params[:id])
    render :show
  end

  def update
    @gym = Gym.find(params[:id])
    if @gym.update_attributes(gym_params)
      render :show
    else
      render json: @gym.errors.full_messages, status: 422
    end
  end

  def destroy
    @gym = Gym.find(params[:id])
    @gym.destroy
    render :show
  end

  private

  def gym_params
    params.require(:gym).permit(
                                :name,
                                :address,
                                :city,
                                :state,
                                :zip,
                                :level,
                                :price,
                                :hours,
                                :phone,
                                :lat,
                                :lng,
                                :website_url,
                                :image_url => [])
  end

end
