json.extract! user, :id, :username, :profile_pic_url
json.image_url_big asset_url(user.avatar.url(:medium))
json.image_url asset_url(user.avatar.url(:thumb))
json.reviews user.reviews do |review|
  json.gym review.gym
  json.review review
  json.date "#{review.updated_at.month}/#{review.updated_at.day}/#{review.updated_at.year}"
end
# json.reviews user.reviews do |review|
#   json.gym_name review.gym.name
# end
