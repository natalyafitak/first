Ext.define('CMS.controller.Comments',{
	extend: 'Ext.app.Controller',
	stores: [
    'OurNews',
    'Comments'
    ],
    models: [
    'OurNews',
    'Comments'],
	views: [
	'ournews.Comments',
	'ournews.ListOfComments',
	'page.PageView',
    'ournews.EditNews',
    'ournews.ListOfNews',
    'ournews.OneNews',
    'ournews.OneComment',
	],
	init: function(){
		this.control({
			'onecomment button[action=saveonecomment]': {
				click : this.saveComments
			},

			
		})
		
	},


		
		saveComments: function(btn){
			var widgetcomment = Ext.widget('onecomment');

			
		   var forma = btn.up('form');
	  
		  var commentcomponent = forma.getForm().findField('content');
		  console.log(commentcomponent);
  		   var comment  = Ext.create('CMS.model.Comments',{
		   	    content: commentcomponent.getValue(),
		   	    author: window.NewCMS.user.email.split('@')[0]	    
		   });	
		   console.log(comment);
		 	comment.save();
		 	
		    var newcommentstore = Ext.data.StoreManager.lookup('Comments');
	  			newcommentstore.load();	
	  			forma.getForm().reset();

		  
		  }
		
		
		
		
		
	


});