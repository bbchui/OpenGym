class GymImgToArray < ActiveRecord::Migration[5.0]
  def change
    remove_column :gyms, :image_url
    add_column :gyms, :image_url, :string, array: true, default: []
  end
end
