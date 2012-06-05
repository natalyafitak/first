class PagesviewsController < ApplicationController
  # GET /pagesviews
  # GET /pagesviews.json
  
  def index
    @pagesviews = Pagesview.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @pagesviews }
  
    end
  end

  # GET /pagesviews/1
  # GET /pagesviews/1.json
  def show
    @pagesview = Pagesview.find(params[:id])
      respond_to do |format|
      format.html # show.html.erb
      format.json { render json: { success:true, page:[@pagesview],}}
    end
  end

  # GET /pagesviews/new
  # GET /pagesviews/new.json
  def new
    @pagesview = Pagesview.new
    
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @pagesview }
    end
  end

  # GET /pagesviews/1/edit
  def edit
    @pagesview = Pagesview.find(params[:id])
  end

  # POST /pagesviews
  # POST /pagesviews.json
  def create
    @pagesview = Pagesview.new(params[:pagesview])

    respond_to do |format|
      if @pagesview.save
        format.html { redirect_to @pagesview, notice: 'pagesview was successfully created.' }
        format.json { render json: @pagesview, status: :created, location: @pagesview }
      else
        format.html { render action: "new" }
        format.json { render json: @pagesview.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /pagesviews/1
  # PUT /pagesviews/1.json
  def update
    @pagesview = Pagesview.find(params[:id])

    respond_to do |format|
      if @pagesview.update_attributes(params[:pagesview])
        format.html { redirect_to @pagesview, notice: 'pagesview was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @pagesview.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pagesviews/1
  # DELETE /pagesviews/1.json
  def destroy
    @pagesview = Pagesview.find(params[:id])
    @pagesview.destroy

    respond_to do |format|
      format.html { redirect_to pagesviews_url }
      format.json { head :no_content }
    end
  end
  
def pagesviewstree
  @pages = Pagesview.find(:all)
  @tree = {:id=>0, :parentid => 0, :children =>[] }
  
  def buildtree(node)
    @pages.each do |page|
      if node[:id] == page.parent_id
        node[:children] << {:id => page.id, :parentid => page.parent_id, :children => []}
          buildtree(node[:children][node[:children].length-1])
        end
    end
    if node[:children].length > 0
      node[:leaf] = false
      node[:expanded] = true
    else
      node[:leaf] = true
    end
  end  
  
  buildtree(@tree)
  
  respond_to do |format|
      format.json { render json: { success: true, page: [@tree]} }
  end        
end
end