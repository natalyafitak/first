class CreateXfolders < ActiveRecord::Migration
  def change
    create_table :xfolders do |t|
      t.string :name
      t.integer :size
      t.string :description

      t.timestamps
    end
  end
end
