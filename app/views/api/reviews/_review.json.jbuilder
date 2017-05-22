json.extract! review, :id, :user_id, :gym_id, :body, :rating

json.username review.user.username
json.image_url asset_url(review.user.avatar.url(:thumb))

json.date "#{review.updated_at.month}/#{review.updated_at.day}/#{review.updated_at.year}"
