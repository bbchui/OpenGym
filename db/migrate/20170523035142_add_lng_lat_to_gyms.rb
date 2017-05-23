class AddLngLatToGyms < ActiveRecord::Migration[5.0]
  def change
    add_column :gyms, :lng, :float
    add_column :gyms, :lat, :float
  end
end
