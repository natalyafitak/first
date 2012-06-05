Ext.define('CMS.model.PageTree',{
	extend:'Ext.data.Model',
	fields:[/*{
		name:'id',
		type:'integer'
	},*/{
		name:'name', 
		type:'string'
	},{
		name:'title',
		type:'string'
	},{
		name:'author',
		type:'string'
	},{
		name:'parent_id',
		type:'integer'
	}],
	
	
	proxy:{
		type:'ajax',
		url:'/pagesviews',
		format:'json',
		//appendId:true,
		reader:{
			root: 'page'
		}	
	 }
});
