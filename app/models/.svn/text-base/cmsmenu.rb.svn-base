class Cmsmenu < ActiveRecord::Base
  has_many :cmsmenus
  attr_accessible :id, :cmsmenu_id, :title, :url
end
 
  def tree
   @roots = cmsmenu.find(:all, :conditions => ['parent_id = ?', 0])
   @response = @roots

   @roots.each do |root|
     logger.debug "roots each"
      output = root
      root.children.each do |child|
           output = {:child => output, :child => child}

      end

   end
   respond_with(@response)
end



  
