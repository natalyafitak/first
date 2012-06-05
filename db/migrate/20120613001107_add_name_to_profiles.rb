class AddNameToProfiles < ActiveRecord::Migration
  def change
    add_column :profiles, :Name, :string
  end
end
