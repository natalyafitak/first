class CreateNewspages < ActiveRecord::Migration
  def change
    create_table :newspages do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
