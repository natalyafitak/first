Ext.define('CMS.model.PageList',{
	extend:'Ext.data.Model',
	
	fields:[{
		name:'id', type:'integer'
	},{
		name:'name', type:'string'
	},{
		name:'title', type:'string'
	},{
		name:'content', type:'string' // - 
	},{
		name:'createdate', type:'date'  // - 
	},{
		name:'author', type:'string'
	},{
		name:'status', type:'string'
	},{
		name:'parent_id', type:'integer'
	},{
		name:'modres_id', type:'integer'
	}],
	
	proxy:{
		type:'rest',
		url:'/pagesviews',
		format:'json',
		//appendId:false
	}
});