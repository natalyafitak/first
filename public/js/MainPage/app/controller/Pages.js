var pagetpl = new Ext.XTemplate(
    '<tpl for=".">',       // process the data.kids node
        '<div style="border-bottom:1px solid gray; margin-bottom:25px;">{title}</p>',  // use current array index to autonumber
   		'<div>{content}</div>',
    '</tpl>'
);

Ext.define('CMS.controller.Pages', {
    extend : 'Ext.app.Controller',
    
    models: ['Page', 'PageList', 'PageTree'],
    stores: ['Pages', 'PageList', 'Contact', 'PageTree'],
    views: ['page.Page','page.NewPage', 'page.PageList', 'page.PageTree'],
    
    init:function(){
    	this.control({
    		'pageview':{
    			render:this.onPageRender
    		},
    		'pageview tool[action=plus]': {
                click: this.newPage
               
           },
           'pageview tool[action=minus]': {
                click: this.DeletePage
               
           },
           'newpage':{
           		'savepages': this.savePage
           },
           'pagelist button[text = Remove]':{
				click: this.deletePage
    	
    		},
    		'pagelist button[text = Update]':{
    			click: this.updatePage
    		}
    	});
    },
    showPage:function(page){
    	pagetpl.overwrite(Ext.getCmp('pageview').body,{title:page.get('title'),content:page.get('content')});	
	   // destination = Ext.getCmp('pageview').down
	   // console.log(destination);
	    	
    },
    onPageRender:function(){
    	//
    	var pageid = 1; //if pageid = -1 then the mainpage 
    	
    	CMS.model.Page.load(pageid,{
    		scope:this,
    		callback:function(page){
    			//console.log(page);
    			this.showPage(page);
    		}
    	});
    },
    
    DeletePage:function(){
    	var DeletePage = Ext.create('Ext.window.Window');
    	var pageform = DeletePage.add({xtype: 'pagelist'});
 	          DeletePage.show();
    },	
    	
    addPage: function(){
 	     this.newPage(Ext.create('CMS.model.Page', {name:'', title:'', content:'', status:'',
 	     author:'', createdate:''
 	      })); 
        },
    
    newPage:function(objectofmodel){
    	var newPage = Ext.create('Ext.window.Window');
    	var pageform = newPage.add({xtype: 'newpage'});
 	          pageform.loadRecord(objectofmodel);
 	          newPage.show();
    },
    savePage:  function(formview){
 	//	var id = formview.getComponent('id_field');
 		var name = formview.getComponent('name_field');
 		var title = formview.getComponent('title_field');
 		var content = formview.getComponent('editor_field');
 		var status = formview.getComponent('status_field');
 		var author = formview.getComponent('author_field');
 		var createdate = formview.getComponent('date_field');
 		var parentId = formview.getComponent('parentid_field');
 		var moduleId = formview.getComponent('moduleid_field');
 		
 		var form = Ext.create('CMS.model.Page',{
    	//	id: id.getValue(),
    		name: name.getValue(),
    		title: title.getValue(),
    		content: content.getValue(),
    		status: status.getValue(),
    		author: author.getValue(),
    		createdate: createdate.getValue(),
    		parentId: parentId.getValue(),
    		modres_id: moduleId.getValue()
   	
   });
   
    	form.save();
    	
    	    
 
 		/*	newpage = formview.getRecord();
	    	newpage.formview.getValue();
	    	console.log(formview);
	  	   	newpage.save ({
	  		    callback: function(){
	  			var newpagestore = Ext.data.StoreManager.lookup('pageviews');
	  			newpagestore.load();
	  		}
  	});*/
  //	console.log(formview)
  	
  //	console.log('xdfsjdkfsui')
  },
  
    deletePage:function(btn){
    	   	var selectedPages = btn.up('grid').getSelectionModel().getSelection();
    		//console.log(selectedPages)
    		for (var i = 0; i<selectedPages.length; i++){
    			selectedPages[i].destroy();
    		}
    		var pagestore = Ext.data.StoreManager.lookup('PageList');
    			pagestore.load();
    	
    },
    
    editPage: function(btn){
    	
	    var selectUpdate = btn.up('grid').getSelectionModel().getSelection();
	     if (selectUpdate.length > 0) {
    		this.newPage(selectUpdate[0]);
    									
	     
										}	
    					},
    					
    updatePage: function(btn){
    	var updatePage = Ext.data.StoreManager.lookup('PageList');
	  		updatePage.load();
    	
    },
    
    
  
  

});