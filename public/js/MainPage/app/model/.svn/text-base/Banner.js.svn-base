Ext.define('CMS.model.Banner',{
	extend:'Ext.data.Model',
	
	fields:[{
		name:'id', type:'integer'
	},{
		name:'title', type:'string'
	},{
		name:'content', type:'string'
	}],
	
	proxy:{
		type:'rest',
		url:'/banner',
		format:'json',
		appendId:false
	}
});