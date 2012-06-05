class CreateWigts < ActiveRecord::Migration
  def change
    create_table :wigts do |t|
      t.string :id
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
