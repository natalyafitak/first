Ext.define('CMS.controller.Profilecont', {
    extend : 'Ext.app.Controller',
    models: ['Profilemod'],
	stores: ['Profiles'],
    views : ['CMS.view.profile.Generalprofile',
			 'CMS.view.profile.Profileedit',
			 'CMS.view.profile.Photochange',
   ],
   init: function(){
   	  this.control({
   	  	'generalprofile button[text=Edit]':{
   	  		click:this.updateProfile
   	  	},
   	  	'profileedit':{
   	  		'saveprofile':this.saveProfile
   	  	},
   	  	'generalprofile button[text=Change]':{
   	  		click:this.updatePicture
   	  	}
   	  })
   },
   editProfile:function(profile){
   	var createEditWindow = Ext.create('Ext.window.Window');
   	var form = createEditWindow.add({xtype:'profileedit'});
   	form.loadRecord(profile);
   	createEditWindow.show();
   }, 
   
   saveProfile:function(form){
   	var profile = form.getRecord();
   	profile.set(form.getValues());
    form.up('window').destroy();
    profile.save ({
	  callback: function(){
	  	var profilestore = Ext.data.StoreManager.lookup('Profiles');
	  	profilestore.load();
	    }
   })
	},
	
   updateProfile:function(btn){
    	var selectedProfiles = btn.up('grid').getSelectionModel().getSelection();
    	if (selectedProfiles.length > 0){
    		this.editProfile(selectedProfiles[0]);
    	}
   },
   updatePicture:function(btn){
    	var selectedProfiles = btn.up('grid').getSelectionModel().getSelection();
    	if (selectedProfiles.length > 0){
    		this.editPicture(selectedProfiles[0]);
    	}
    },
    
    editPicture:function(profile){
   	var createEditWindow = Ext.create('Ext.window.Window');
   	var form = createEditWindow.add({xtype:'photochange'});
   	form.loadRecord(profile);
   	createEditWindow.show();
   },
	   
	   });

