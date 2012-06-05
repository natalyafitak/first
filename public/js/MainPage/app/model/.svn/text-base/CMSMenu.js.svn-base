Ext.define('CMS.model.CMSMenu',{
	extend:'Ext.data.Model',
	
	fields:[{
		name:'id', 
		type:'integer'
	},{
		name:'title', 
		type:'string'
	},{
		name:'cmsmenu_id', 
		type:'integer'
	},{
		name:'url', 
		type:'string'
	}],
	
	hasMany: {
		model:'CMS.model.CMSMenu',
		name:'cmsmenus',
		foreignKey:'cmsmenu_id'
	},
	
	//belongsTo: 'CMS.model.CMSMenu',
	
	  proxy:{
		type:'rest',
		url:'/cmsmenus',
		format:'json',
		appendId:true	
	 }
});