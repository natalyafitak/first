class AddPageidToNewspageslist < ActiveRecord::Migration
  def change
    add_column :newspageslists, :Pageid, :integer
  end
end
