class CreatePageviews < ActiveRecord::Migration
  def change
    create_table :pageviews do |t|
      t.integer :id
      t.string :name
      t.string :title
      t.text :content
      t.datetime :createdate
      t.string :author
      t.string :status
      t.integer :parent_id
      t.integer :module_id

      t.timestamps
    end
  end
end
