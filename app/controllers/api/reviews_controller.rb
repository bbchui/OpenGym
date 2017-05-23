class Api::ReviewsController < ApplicationController

  def new
    render :new
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show #need to render gym show page
    else
      render json:
      @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Gym.find_by(id: params[:gym_id]).reviews
  end

  def show
    @review = Review.find(params[:id])
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json:
      @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end


  private

  def review_params
    params.require(:review).permit(:user_id, :gym_id, :body, :rating)
  end

end
