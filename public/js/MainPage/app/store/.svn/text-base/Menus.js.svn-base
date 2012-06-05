Ext.define('CMS.store.Menus', {
	extend:'Ext.data.Store',
	model:'CMS.model.CMSMenu',
	//autoLoad:true,
	

	proxy: {
	    type: 'rest',
	    //url: '/menus', 
	   // url: '/js/MainPage/data/menu/mainmenu',
	    url: '/cmsmenus',
	    format:'json',
	    reader: {
			root:'cmsmenus'
		}
	}
});