class Users::RegistrationsController < Devise::RegistrationsController
  #before_filter :check_permissions, :only => [:new, :create, :cancel]
  #skip_before_filter :require_no_authentication

  #def check_permissions
  # authorize! :create, resource
  #end
  skip_before_filter :verify_authenticity_token, :only => :create
  # POST /resource/sign_up
  
 
  def after_inactive_sign_up_for(resource)
    "http://localhost:3000/"
  end

  
  def create
 
    @user = User.new(params[:user])

    respond_to do |format|
     if @user.save
     format.json {render :json => {:success => true, :user => @user, :user_email => @user.email}}
      else
        format.json {render :json => {:success => false, :errors => "This email is already used!"}}
      end
    end
  end
  
end