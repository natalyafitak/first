Ext.define('CMS.store.PageTree',{
	extend:'Ext.data.TreeStore',
	model:'CMS.model.PageTree',
	autoLoad:true,
	
	
	proxy:{
		type:'ajax',
		url:'/pagesviews/pagesviewstree.json',
	  //  format:'json',
		reader:{
			root: 'page',
			type: 'json'
			
		}
	}
})
