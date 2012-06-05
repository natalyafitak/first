class CreateNewspageslists < ActiveRecord::Migration
  def change
    create_table :newspageslists do |t|
      t.string :title
      t.string :contenturl
      t.string :imageurl
      t.string :anounce
      t.datetime :dateofnews

      t.timestamps
    end
  end
end
