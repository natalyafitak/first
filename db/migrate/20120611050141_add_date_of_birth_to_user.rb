class AddDateOfBirthToUser < ActiveRecord::Migration
  def change
    add_column :users, :date_of_birth_, :date
  end
end
