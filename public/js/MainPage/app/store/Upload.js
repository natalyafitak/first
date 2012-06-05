Ext.define('CMS.store.Upload',{
	extend:'Ext.data.Store',
	model:'CMS.model.Upload',
	autoLoad:true,
	proxy:{
		type:'rest',
		//url:'/FMs',
	url:'js/MainPage/data/upload/uploaddata',
	    //url:'/folderxes',
		format:'json',
		reader:{
			type: 'json',
			root: 'upload'
			//root:'folderxes'
		},
	}
})