Ext.define('CMS.model.File',{
	extend:'Ext.data.Model',
	
	fields:[{
		name:'id', 
		type:'string'
	},{
		name:'name',
		type:'string'
	},{
		name:'filetype',
		type:'string'
	},{
		name:'folderid',
		type:'string'
	}],
	
	belongTo:'Folder',
	proxy:{
		type:'rest',
		url:'/exfilens',
		format:'json',
		appendId:true	
	 }
});
