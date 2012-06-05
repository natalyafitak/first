class ExfilensController < InheritedResources::Base
def index
    @exfilens = Exfilen.all
     respond_to do |format|
      format.html # index.html.erb
      format.json { render json: {success:true, exfilens:@exfilens} }
    end
  end

  
  def show
    @exfilen = Exfilen.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @exfilen }
    end
  end
end
