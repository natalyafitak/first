Ext.define('CMS.model.Profilemod', {
    extend: 'Ext.data.Model',
	fields:[{
		name:'user_id', type:'integer'
	},{
		name:'photograph', type:'string'
	},{
		name:'name', type:'string'
	},{
		name:'lastname', type:'string'
	},{
		name:'email', type:'string'
	},{
		name:'phone', type:'string'
	},{
		name:'address', type:'string'
	},{
		name:'about', type:'string'
	}],
	
	proxy:{
		type:'rest',
		url:'/profile',
		format:'json',
		appendId:false
	}
});