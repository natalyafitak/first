class CmsmenusController < InheritedResources::Base
  
  def index
    @cmsmenus = Cmsmenu.all
    @tree = {:id => 0,:title => "Menu",:cmsmenu_id =>0,:cmsmenus=>[]}
    
    
    def buildtree(node)
    @cmsmenus.each do |cmsmenu|
      if node[:id] == cmsmenu.cmsmenu_id
        node[:cmsmenus] << {:id => cmsmenu.id,:title => cmsmenu.title, :cmsmenu_id => cmsmenu.cmsmenu_id,:url => cmsmenu.url,:cmsmenus => []}
          buildtree(node[:cmsmenus][node[:cmsmenus].length-1])
        end
    end
    if node[:cmsmenus].length > 0
      node[:leaf] = false
      node[:expanded] = true
    else
      node[:leaf] = true
    end
  end  
  
  buildtree(@tree)
    
    
    respond_to do |format|
    format.html # index.html.erb
    format.json {render json: {success:true, cmsmenus:@tree} }
    end
  end

  def show
      @cmsmenu = Cmsmenu.find(params[:id])
      respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @cmsmenu }
    end
  end
  


  
  def show
    @cmsmenu = Cmsmenu.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @cmsmenu }
    end
  end
  
  def new
    @cmsmenu = Cmsmenu.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @cmsmenu }
    end
  end  
  
  def edit
    @cmsmenu = Cmsmenu.find(params[:id])
      respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @cmsmenu }
     end
  end  
  
  def create
    @cmsmenu = Cmsmenu.new(params[:cmsmenu])

    respond_to do |format|
      if @cmsmenu.save
        format.html { redirect_to @cmsmenu, notice: 'cmsmenu was successfully created.' }
        format.json { render json: @cmsmenu, status: :created, location: @cmsmenu }
      else
        format.html { render action: "new" }
        format.json { render json: @cmsmenu.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def destroy
    @cmsmenu = Cmsmenu.find(params[:id])
    @cmsmenu.destroy

      respond_to do |format|
      format.html { redirect_to cmsmenus_url }
      format.json { head :no_content }
    end
  end
  
  
end




   
