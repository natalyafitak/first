Ext.define('CMS.model.Folder',{
	extend:'Ext.data.Model',
	
	fields:[{
		name:'id', 
		type:'string'
	},{
		name:'name',
		type:'string'
	},{
		name:'parent_id',
		type:'string'
	},{
		name:'path',
		type:'string'
	}
	],
	
	hasMany:[{model:'CMS.model.File',name:'files'}],
	
	proxy:{
		type:'rest',
		url:'/foldexes',
		format:'json',
		appendId:true	
	 }
});
