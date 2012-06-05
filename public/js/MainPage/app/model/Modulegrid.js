Ext.define('CMS.model.Modulegrid',{
	extend:'Ext.data.Model',
	
	fields:[{
		name:'id', type:'integer'
	},{
		name:'name', type:'string'
	},{
		name:'version', type:'string'
	},{
		name:'description', type:'string'
	 }],
	
	proxy:{
		type:'rest',
		url:'/modres',
		format:'json'
	}
});