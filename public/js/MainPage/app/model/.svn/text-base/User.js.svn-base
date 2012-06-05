Ext.define('CMS.model.User', {
    extend: 'Ext.data.Model',
    fields: [{
    	name: 'id',  type:'integer'
    },{
    	name: 'email',  type:'string'
    },{
    	name: 'first_name', type:'string'
    },{
    	name: 'last_name', type:'string'
    },{
    	name: 'gender', type:'integer'
    },{
    	name: 'date_of_birth_', type:'string'
    },{
    	name: 'phone_number', type:'string'
    	}],
    	
    proxy:{
		type:'rest',
		url:'/users',
		format:'json'
	}
});