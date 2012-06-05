Ext.define('CMS.controller.FM',{
	extend:'Ext.app.Controller',
		
    models:['FM'],
    
    stores:['FMs','FMsf'],

 views : ['FM.FM'],
    
    
    	init:function(){
    	this.control({
    		'FM button[text=Save]':{
    			click:this.saveOnServer
    		},
    		'fm treepanel':{
    			itemclick:this.showFolderFiles
    		}
    	})
    },
    
    saveOnServer:function(){
    	alert('You clicked the button!');
    },
    showFolderFiles:function(view, model){
    	console.log(model)
    }
});
