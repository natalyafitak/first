Ext.define('CMS.controller.DeleteNews', {
    extend : 'Ext.app.Controller',
    stores: ['OurNews'],
    models: ['OurNews'],
    views: [ 
     'page.PageView',
     'ournews.EditNews',
     'ournews.ListOfNews'],

init:function(){
	 this.control({
		'listofnews': {
		'deletenews': this.Deletenewsfunc
		}
	});
},
	
	   Deletenewsfunc:function(deleteicon){
    		var selected = deleteicon.getSelectionModel().getSelection();
    		for (var i = 0; i<selected.length; i++){
    			selected[i].destroy();
    		}
    		var newstore = Ext.data.StoreManager.lookup('OurNews');
    			newstore.load();   	
   },

	   });





















