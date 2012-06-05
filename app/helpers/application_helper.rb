module ApplicationHelper
=begin
 
  def is_admin?(user)
    admin_role = Role.find(:first, :conditions => ["name = ?", "admin"])
    return user.roles.include?(admin_role)
  end

  def is_registered?(user)
    admin_role = Role.find(:first, :conditions => ["name = ?", "registered"])
    return user.roles.include?(admin_role)
  end
=end

end
