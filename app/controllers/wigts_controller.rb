class WigtsController < InheritedResources::Base
  # GET /wigts
  # GET /wigts.json
  def index
    @wigts = Wigt.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: {success:true, wigts:@wigts} }
    end
  end

  # GET /wigts/1
  # GET /wigts/1.json
  def show
    @wigt = Wigt.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @wigt }
    end
  end

  # GET /wigts/new
  # GET /wigts/new.json
  def new
    @wigt = Wigt.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @wigt }
    end
  end

  # GET /wigts/1/edit
  def edit
    @wigt = Wigt.find(params[:id])
  end

  # POST /wigts
  # POST /wigts.json
  def create
    @wigt = Wigt.new(params[:wigt])

    respond_to do |format|
      if @wigt.save
        format.html { redirect_to @wigt, notice: 'Wigt was successfully created.' }
        format.json { render json: @wigt, status: :created, location: @wigt }
      else
        format.html { render action: "new" }
        format.json { render json: @wigt.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /wigts/1
  # PUT /wigts/1.json
  def update
    @wigt = Wigt.find(params[:id])

    respond_to do |format|
      if @wigt.update_attributes(params[:wigt])
        format.html { redirect_to @wigt, notice: 'Wigt was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @wigt.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wigts/1
  # DELETE /wigts/1.json
  def destroy
    @wigt = Wigt.find(params[:id])
    @wigt.destroy

    respond_to do |format|
      format.html { redirect_to wigts_url }
      format.json { head :no_content }
    end
  end
 
  def login
   respond_to do |format|
      format.json { render json: {success:true, wigt: "Wigt name here!"} }
    end
  end
end