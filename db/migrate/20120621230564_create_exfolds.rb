class CreateExfolds < ActiveRecord::Migration
  def change
    create_table :exfolds do |t|
      t.string :id
      t.string :name
      t.string :parent_id
      t.string :path

      t.timestamps
    end
  end
end
