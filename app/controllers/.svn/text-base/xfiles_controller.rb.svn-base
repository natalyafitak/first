class XfilesController < InheritedResources::Base
def index
    @xfiles = Xfile.all
     respond_to do |format|
      format.html # index.html.erb
      format.json { render json: {success:true, xfiles:@xfiles} }
    end
  end

  
  def show
    @xfile = Xfile.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @xfile }
    end
  end
end
