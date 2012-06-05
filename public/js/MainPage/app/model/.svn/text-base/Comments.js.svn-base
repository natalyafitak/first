Ext.define('CMS.model.Comments',{
	extend: 'Ext.data.Model',   
	fields:[{
		name: 'content',
		type: 'string'
	},{
		name: 'author',
		type: 'string'
	},{
		name:'created_at',
		type:'datetime'
	}],
	
	
		proxy: {
			type: 'rest',
			url: '/comments',
			format: 'json'
		}
		
});
