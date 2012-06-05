Ext.define('CMS.controller.Contact', {
    extend : 'Ext.app.Controller',
    views  : ['user.ContactView', 'user.WindowContact'],
        init: function() {
        this.control({
           
            '#addcontact':{
            click: this.WindowContact
            },
			'window > window': {
			render: this.onWindowRendered	
				
			},
			 'wincontact button[action=submit]': {
                click: this.getComponent
               
           },
           'wincontact button[action=close]': {
           	click: this.closeWindow
           	
           }
        });
    },
    
    WindowContact: function(button) {
       var view = Ext.widget('wincontact'); 
	   view.show();
		
    },
	
	submitForm: function(button) {
		
        console.log('clicked the Send button');
    
	
 },
 
 closeWindow: function(button) {
 	var view = Ext.widget('wincontact');
 	view.hide();
 	
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
 	  
  console.log(version);
 // Ext.Message.alert ('Thank you','New module has been created');
  alert('Status', function(btn){
  	if(btn=='ok'){
  		
  	btn.OwnerCt.form.close
  	//	console.log(formclose);
  				  }
  	
  	
  		});
 	}
});