class UsersController < ApplicationController 

  # GET /users
  # GET /users.json
  def index
    @users = current_user

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: {success:true, users:@users} }
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end

  # GET /users/new
  # GET /users/new.json
  def new
    @user = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: {success:true, users:@users} }
    end
  end

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # POST /users
  # POST /users.json

  def create
    
    @user = User.new(params[:user])

    respond_to do |format|
      if @user.save
     UserMailer.registration_confirmation(@user).deliver
     format.json {render :json => {:success => true, :user => @user, :user_email => @user.email}}
      else
        format.json {render :json => {:success => false, :errors => "This email is already used!"}}
      end
    end
    
  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end
 
  def login
   respond_to do |format|
      format.json { render json: {success:true, user: "User name here!"} }
    end
  end
  
  def checklogin
    @user = current_user
    respond_to do |format|
     if @user 
        format.json { render json: {success:true, user:@user, :user_email => current_user.email} } 
    else
      format.json { render json: {success:false, :errors => "Failed"} } 
     
      end
    end
   end
  
end
