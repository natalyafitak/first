Ext.define('CMS.store.Profiles', {
    extend : 'Ext.data.Store',
	model: 'CMS.model.Profilemod',
	autoLoad: true,
	proxy:{
		type:'rest',
		url:'/profiles',
		format:'json',
		reader:{
			root:'profiles',
		}
	}
});