class CreateFolders < ActiveRecord::Migration
  def change
    create_table :folders do |t|
      t.string :id
      t.string :parent_id
      t.string :name

      t.timestamps
    end
  end
end
