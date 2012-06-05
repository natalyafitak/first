class NewslistpagesController < InheritedResources::Base

# GET /newslistpages
  # GET /newslistpages.json
  def fotonewsupload
   @newsphoto = params[:imageurl]
    File.open(Rails.root.join('public', 'uploads', @newsphoto.original_filename), 'wb') do |file|
    file.write(newsphoto.read)
   @newslistpage = Newslistpage.find(params[:imageurl])
    respond_to do |format|
      format.json { render json: {success:true, newslistpage:@newslistpages} }
    end
  end
  end
  
  def index
    @newslistpages = Newslistpage.all
     respond_to do |format|
      format.html # index.html.erb
      format.json { render json: {success:true, newslistpages:@newslistpages} }
    end
  end

  # GET /newslistpages/1
  # GET /newslistpages/1.json
  def show
    @newslistpage = Newslistpage.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @newslistpage }
    end
  end

  # GET /newslistpages/new
  # GET /newslistpages/new.json
  def new
    @newslistpage = Newslistpage.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @newslistpage }
    end
  end

  # GET /newslistpages/1/edit
  def edit
    @newslistpage = Newslistpage.find(params[:id])
  end

  # POST /newslistpages
  # POST /newslistpages.json
  def create
    @newslistpage = Newslistpage.new(params[:newslistpage])

    respond_to do |format|
      if @newslistpage.save
        format.html { redirect_to @newslistpage, notice: 'Newslistpage was successfully created.' }
        format.json { render json: @newslistpage, status: :created, location: @newslistpage }
      else
        format.html { render action: "new" }
        format.json { render json: @newslistpage.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /newslistpages/1
  # PUT /newslistpages/1.json
  def update
    @newslistpage = Newslistpage.find(params[:id])

    respond_to do |format|
      if @newslistpage.update_attributes(params[:newslistpage])
        format.html { redirect_to @newslistpage, notice: 'Newslistpage was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @newslistpage.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /newslistpages/1
  # DELETE /newslistpages/1.json
  def destroy
    @newslistpage = Newslistpage.find(params[:id])
    @newslistpage.destroy

    respond_to do |format|
      format.html { redirect_to newslistpages_url }
      format.json { head :no_content }
    end
  end
 
  def login
   respond_to do |format|
      format.json { render json: {success:true, newslistpage: "Newslistpage name here!"} }
    end
  end
end

