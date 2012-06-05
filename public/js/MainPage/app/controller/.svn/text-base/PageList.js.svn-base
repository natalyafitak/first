Ext.define('CMS.controller.PageList',{
	extend:'Ext.app.Controller',
		
    models:['PageList'],
    
    stores:['PageList'],
    
    views:['page.NewPage', 'page.Page', 'page.PageList'],
    
    init:function(){
    	this.control({
    		/*'pagelist button[text=Add]':{
    			click: this.WindowContact
    		},*/
    		'pagelist button[text=Remove]':{
    			click:this.removePage
    		},
    		/*'pagelist button[text=Update]':{
    			click:this.updateModule
    		}*/
    	});    	
    },
    
    
    /* WindowContact: function(button) {
       var view = Ext.widget('wincontact'); 
	   view.show();
		
    },*/
    
    
    removePage:function(btn){
    	   	
    		var selectedModules = btn.ownerCt.ownerCt.getSelectionModel().getSelection();
    		
    		for (var i = 0; i<selectedModules.length; i++){
    			selectedModules[i].destroy();
    		}
    		console.log(selectedModules);
    		var modulestore = Ext.data.StoreManager.lookup('Modules');
    			modulestore.load();
    	
    },
    
    /*
    		}
    	});
    }*/
    
});

