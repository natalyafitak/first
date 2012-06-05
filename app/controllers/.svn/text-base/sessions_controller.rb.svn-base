class SessionsController < Devise::SessionsController
  
  def new
  end
 
 def create
   value = (cookies[:failure] || '0').to_i
   
   if (value < 3)    
      #resource = warden.authenticate!(auth_options)
      #set_flash_message(:notice, :signed_in) if is_navigational_format?
      #sign_in(resource_name, resource)
      
      warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
      
      render :json => {:success => true, :user => current_user, :user_email => current_user.email}
   else
     if verify_recaptcha
      warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
      cookies[:failure] = 0
      render :json => {:success => true, :user => current_user, :user_email => current_user.email}
     else
        render :json => {:success => false, :errors => "You have entered an invalid value for the captcha"}
     end
     
   end
 end

  def destroy
     redirect_path = after_sign_out_path_for(resource_name)
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message :notice, :signed_out if signed_out
    
      session[:current_user_id] = nil
      render :json => {:success => true}
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
 end

  def failure
    value = (cookies[:failure] || '0').to_i
      cookies[:failure] = (value + 1).to_s 
      @failures = cookies[:failure] 
   render :json => {:success => false, :errors => "You entered invalid email or password", :count => @failures}
  end
end
