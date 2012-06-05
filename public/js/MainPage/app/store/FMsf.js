Ext.define('CMS.store.FMsf',{
	extend: 'Ext.data.Store',
	model:'CMS.model.File',
	autoLoad:true,
	proxy:{
		type:'rest',
		//url:'/FMs',
		url:'/exfilens',
		format:'json',
		reader:{
			type:'json',
			root:'exfilens'
		}
	}
})