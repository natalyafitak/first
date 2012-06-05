Ext.define('CMS.model.FM',{
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
		url:'/FM',
		format:'json',
		appendId:false
	}
});
