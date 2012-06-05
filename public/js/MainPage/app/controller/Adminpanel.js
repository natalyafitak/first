Ext.define('CMS.controller.Adminpanel', {
    extend : 'Ext.app.Controller',
    stores: ['Adminpanel'],
    models: ['Adminpanel'],
    views : ['user.AdminPanel','user.WindowContact', 'module.ListButton'],
    
    init: function() {
        	this.control({
           
            '#addmodule':{
            click: this.WindowContact
            },
            
            '#showlist':{
            click: this.ModuleList
            
            },
       
	
            
            'wincontact button[action=submit]': {
                click: this.getComponent
               
            }
    				
    					});
    				  },
    				  
    				  WindowContact: function(button) {
       var view = Ext.widget('wincontact'); 
	   view.show();
		
    },
    
    ModuleList: function(button) {
       var view = Ext.widget('modulelist'); 
	   view.show();
		
    },
    
    getComponent: function(btn) {
 	  
 	  
 	  var name = btn.ownerCt.ownerCt.getComponent('edit').getComponent('name');
 	  var version = btn.ownerCt.ownerCt.getComponent('version'); 
 	  var description = btn.ownerCt.ownerCt.getComponent('description'); 
 	 // l1.update();
 	 
    	var form = Ext.create('CMS.model.Contact',{
    		name: name.getValue(),
    		version: version.getValue(),
    		description: description.getValue()
    	});
    	
    	form.save();
    	alert('New module was created!', function(btn,text) {
    		if(btn == 'ok'){
    			this.up('window').hide();
    			
    		}
    		
    		
    	});
 	  	
  /*console.log(version);
alert('Status', function(btn, text) {
	if(btn == 'ok')  {
		this.form.close();
		
		
	}
	
	
})*/
 	
 	
 	
 	}
});
