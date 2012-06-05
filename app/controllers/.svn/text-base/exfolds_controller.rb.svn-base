class ExfoldsController < ApplicationController

def index
    @exfolds = Exfold.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @exfolds }
  
    end
  end
  
  def exfold

    @exfolds = Exfold.find(:all)    
    @tree = {:id=>0, :parentid=>0, :children=>[]}

  def buildtree(node)
  @exfolds.each do |exfold|
  if node[:id] == exfold.parent_id
        node[:children] << {:id => exfold.id, :parentid => exfold.parent_id, :children => []}
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
      format.html # index.html.erb
      format.json { render json: {success:true, exfold:[@tree]}}
    end
  end
  
  end