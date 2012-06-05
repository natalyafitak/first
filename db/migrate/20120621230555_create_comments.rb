class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :content
      t.string :author
      t.datetime :dateofcomment

      t.timestamps
    end
  end
end
