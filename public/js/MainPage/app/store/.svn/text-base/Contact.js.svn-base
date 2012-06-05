Ext.define('CMS.store.Contact',{
	extend:'Ext.data.Store',
	model:'CMS.model.Contact',
	autoLoad:false,
	
	fields: [
        {name: 'id', type: 'integer'},
	],
	
	proxy:{
		type:'rest',
		url:'/modres',
		format:'json',
		reader:{
			root:'modres'
		}
	}
})
