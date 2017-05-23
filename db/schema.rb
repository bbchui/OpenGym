# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170523035142) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gyms", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "address",     null: false
    t.string   "city",        null: false
    t.string   "state",       null: false
    t.string   "zip",         null: false
    t.string   "level",       null: false
    t.string   "price",       null: false
    t.string   "hours",       null: false
    t.string   "phone"
    t.string   "website_url"
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.float    "lng"
    t.float    "lat"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "gym_id",     null: false
    t.text     "body",       null: false
    t.integer  "rating",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "profile_pic_url"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
