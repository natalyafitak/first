Ext.define('CMS.store.Pages',{
	extend:'Ext.data.Store',
	model:'CMS.model.Page',
	autoLoad: false,
	
	fields: [
        {name: 'parent_id', type: 'integer'},
        {name: 'module_id', type: 'integer'},
        {name: 'title',     type:'string'},
        {name: 'content',   type:'string'}
        
    		],
    
    proxy:{
		type:'rest',
		format:'json',
		url:'/pagesviews',
		
	},
	
});
