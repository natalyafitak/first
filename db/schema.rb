# encoding: UTF-8
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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120621230566) do

  create_table "banners", :force => true do |t|
    t.string   "title"
    t.string   "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "comments", :force => true do |t|
    t.string   "content"
    t.string   "author"
    t.datetime "dateofcomment"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "exfilens", :force => true do |t|
    t.string   "name"
    t.string   "filetype"
    t.string   "folderid"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "exfolds", :force => true do |t|
    t.string   "name"
    t.string   "parent_id"
    t.string   "path"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "file1s", :force => true do |t|
    t.string   "folder_id"
    t.string   "name"
    t.string   "type"
    t.string   "path"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "fms", :force => true do |t|
    t.string   "name"
    t.string   "size"
    t.string   "string"
    t.text     "comment"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "folders", :force => true do |t|
    t.string   "parent_id"
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "lists", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "lnews", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "createad"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "menus", :force => true do |t|
    t.string   "title"
    t.integer  "parent_id"
    t.string   "url"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "modres", :force => true do |t|
    t.string   "name"
    t.integer  "version"
    t.text     "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "newslistpages", :force => true do |t|
    t.string   "title"
    t.string   "contenturl"
    t.string   "imageurl"
    t.string   "anounce"
    t.datetime "dateofnews"
    t.integer  "pageid"
    t.string   "author"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "newspages", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.binary   "Newsimages"
  end

  create_table "newspageslists", :force => true do |t|
    t.string   "title"
    t.string   "contenturl"
    t.string   "imageurl"
    t.string   "anounce"
    t.datetime "dateofnews"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "Pageid"
  end

  create_table "pages", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "pagesviews", :force => true do |t|
    t.string   "name"
    t.string   "title"
    t.text     "content"
    t.datetime "createdate"
    t.string   "author"
    t.string   "status"
    t.integer  "parent_id"
    t.integer  "module_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "pageviews", :force => true do |t|
    t.string   "name"
    t.string   "title"
    t.text     "content"
    t.datetime "createdate"
    t.string   "author"
    t.string   "status"
    t.integer  "parent_id"
    t.integer  "module_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "posts", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "posts", ["user_id"], :name => "index_posts_on_user_id"

  create_table "profiles", :force => true do |t|
    t.string   "phone"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "name"
    t.string   "lastname"
    t.string   "about"
    t.string   "address"
    t.binary   "photodata"
    t.string   "phototype"
    t.string   "email"
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone_number"
    t.date     "date_of_birth_"
    t.string   "gender"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.integer  "role_id",                :default => 2
  end

  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "wigts", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.float    "version"
  end

  create_table "xfiles", :force => true do |t|
    t.string   "Name"
    t.integer  "Size"
    t.string   "Description"
    t.string   "Way"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "xfolders", :force => true do |t|
    t.string   "name"
    t.integer  "size"
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "xfolds", :force => true do |t|
    t.integer  "parentid"
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
