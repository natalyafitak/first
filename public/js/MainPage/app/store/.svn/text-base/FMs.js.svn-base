Ext.define('CMS.store.FMs',{
	extend:'Ext.data.TreeStore',
	model:'CMS.model.Folder',
	autoLoad:true,
	proxy:{
		type:'rest',
		//url:'/FMs',
	//url:'js/MainPage/data/fm/filemanagerdata',
	    url:'/exfolds',
		format:'json',
		reader:{
			root: 'fm',
			//root:'exfolds'
		}
	}
})
