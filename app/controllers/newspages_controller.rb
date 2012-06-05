class NewspagesController < InheritedResources::Base
   
 # GET /newspages
  # GET /newspages.json
  def index
    @newspages = Newspage.all
     respond_to do |format|
      format.html # index.html.erb
      format.json { render json: {success:true, newspages:@newspages} }
    end
  end

  # GET /newspages/1
  # GET /newspages/1.json
  def show
    @newspage = Newspage.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @newspage }
    end
  end

  # GET /newspages/new
  # GET /newspages/new.json
  def new
    @newspage = Newspage.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @newspage }
    end
  end

  # GET /newspages/1/edit
  def edit
    @newspage = Newspage.find(params[:id])
  end

  # POST /newspages
  # POST /newspages.json
  def create
    @newspage = Newspage.new(params[:newspage])

    respond_to do |format|
      if @newspage.save
        format.html { redirect_to @newspage, notice: 'Newspage was successfully created.' }
        format.json { render json: @newspage, status: :created, location: @newspage }
      else
        format.html { render action: "new" }
        format.json { render json: @newspage.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /newspages/1
  # PUT /newspages/1.json
  def update
    @newspage = Newspage.find(params[:id])

    respond_to do |format|
      if @newspage.update_attributes(params[:newspage])
        format.html { redirect_to @newspage, notice: 'Newspage was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @newspage.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /newspages/1
  # DELETE /newspages/1.json
  def destroy
    @newspage = Newspage.find(params[:id])
    @newspage.destroy

    respond_to do |format|
      format.html { redirect_to newspages_url }
      format.json { head :no_content }
    end
  end
 
  def login
   respond_to do |format|
      format.json { render json: {success:true, newspage: "Newspage name here!"} }
    end
  end
end
