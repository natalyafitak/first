class Pagesview < ActiveRecord::Base
  has_many :modres
  attr_accessible :author, :content, :createdate, :id, :modres_id, :name, :parent_id, :status, :title
end
