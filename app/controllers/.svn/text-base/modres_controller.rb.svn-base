class ModresController < ApplicationController
  # GET /modres
  # GET /modres.json
  def index
    @modres = Modre.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @modres }
    end
  end

  # GET /modres/1
  # GET /modres/1.json
  def show
    @modre = Modre.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @modre }
    end
  end

  # GET /modres/new
  # GET /modres/new.json
  def new
    @modre = Modre.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @modre }
    end
  end

  # GET /modres/1/edit
  def edit
    @modre = Modre.find(params[:id])
  end

  # POST /modres
  # POST /modres.json
  def create
    @modre = Modre.new(params[:modre])

    respond_to do |format|
      if @modre.save
        format.html { redirect_to @modre, notice: 'Modre was successfully created.' }
        format.json { render json: @modre, status: :created, location: @modre }
      else
        format.html { render action: "new" }
        format.json { render json: @modre.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /modres/1
  # PUT /modres/1.json
  def update
    @modre = Modre.find(params[:id])

    respond_to do |format|
      if @modre.update_attributes(params[:modre])
        format.html { redirect_to @modre, notice: 'Modre was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @modre.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /modres/1
  # DELETE /modres/1.json
  def destroy
    @modre = Modre.find(params[:id])
    @modre.destroy

    respond_to do |format|
      format.html { redirect_to modres_url }
      format.json { head :no_content }
    end
  end
end
