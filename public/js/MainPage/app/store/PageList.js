Ext.define('CMS.store.PageList',{
	extend:'Ext.data.Store',
	model:'CMS.model.PageList',
	autoLoad:true,
	proxy:{
		type:'rest',
		url:'/pagesviews',
		format:'json',
		reader:{
			root:'page'
		}
	}
})