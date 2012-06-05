Ext.define('CMS.controller.OurNews', {
    extend : 'Ext.app.Controller',
    stores: [
    'OurNews',
    'Comments'
    ],
    models: [
    'OurNews',
    'Comments'],
    views: [ 
     'page.PageView',
     'ournews.EditNews',
     'ournews.ListOfNews',
     'ournews.OneComment',
     'ournews.Comments',
     'ournews.ListOfComments',
     'ournews.OneNews',

     ],

init:function(){
	this.control({
		'listofnews button[text = Add your own new]':{
		click: this.Addnewsfunc
		},
		'listofnews': {
		'updatenews': this.Updatenewsfunc      //change to double click
		},
		'editnews': {
			'savenews': this.Savenewsfunc
	  },
	  	'viewport > panel > loginform':{
    			'userHasLoggedIn':function(user){          
    				var addbutton = Ext.getCmp('addnews');
					var addicon = Ext.getCmp('addicons');
    				addbutton.show();	
    				if (user.role == 'admin'){
    					addicon.show();
    				}
    				
    				  },
    			'userHasLoggedOut':function(){
    				var addbutton = Ext.getCmp('addnews');
    				var addicon = Ext.getCmp('addicons');
    				addbutton.hide();
    				addicon.hide();
    				}
    		} 
	});
},
	
	   Addnewsfunc: function(){
 	     this.Helpfunc(Ext.create('CMS.model.OurNews', {
 	     	author: window.NewCMS.user.email.split('@')[0],
 	     	 })); 
        },
	   
	   
	     Helpfunc: function(objectofmodel){               //допоміжна функція
	      	  var editnews = Ext.create('Ext.window.Window');
 	          var editnewswithform = editnews.add({xtype: 'editnews'});
 	          editnewswithform.loadRecord(objectofmodel);
 	          editnews.show();
	      },

        Savenewsfunc:  function(formochka, form){
 	
	    	var newnews = formochka.getRecord(); 
	    	//var forma = formochka.getForm();	
	    	console.log(formochka);
	    	 console.log(form);
	  	    newnews.set(formochka.getValues());
	  	  /*  if (form.isValid()){
	  	    	form.submit({
	  	    		url: '/newslistpages/fotonewsupload',
	  	    		waitMsg: 'Uploading...',
	  	    		success: function(fp, o){
	  	    			alert('Upload'+ o.result.file);
	  	    		}
	  	    	})
	  	    }*/
	  	    formochka.up('window').destroy();
	  	    newnews.save ({
	  		    callback: function(){
	  			var newnewstore = Ext.data.StoreManager.lookup('OurNews');
	  			newnewstore.load();
	  		}
  	});
  },
 
	  	Updatenewsfunc: function(updateicon){
	     selectupdate = updateicon.getSelectionModel().getSelection();
	     if (selectupdate.length > 0){
	         this.Helpfunc(selectupdate[0]); //витягує дані у форму та збеігає їх завдяки допоміжної функції
	     }
	}
	  
	 
	
	   });





















