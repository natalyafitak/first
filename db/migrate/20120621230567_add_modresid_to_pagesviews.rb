class AddModresidToPagesviews < ActiveRecord::Migration
  def change
    add_column :pagesviews, :modres_id, :string
    add_column :pagesviews, :integer, :string
  end
end
