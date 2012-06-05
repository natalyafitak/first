class AddFieldsToProfiles < ActiveRecord::Migration
  def change
    add_column :profiles, :photodata, :binary
    add_column :profiles, :phototype, :string
    add_column :profiles, :email, :string
  end
end
