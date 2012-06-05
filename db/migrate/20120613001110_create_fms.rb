class CreateFms < ActiveRecord::Migration
  def change
    create_table :fms do |t|
      t.string :name
      t.string :size
      t.string :string
      t.text :comment

      t.timestamps
    end
  end
end
