class CreateGyms < ActiveRecord::Migration[5.0]
  def change
    create_table :gyms do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :level, null: false
      t.string :price, null: false
      t.string :hours, null: false
      t.string :phone
      t.string :website_url
      t.string :image_url
      t.timestamps
    end
  end
end
