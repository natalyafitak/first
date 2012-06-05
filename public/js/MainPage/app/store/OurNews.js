Ext.define('CMS.store.OurNews', {
    extend: 'Ext.data.Store',
    model: 'CMS.model.OurNews',

	autoLoad: true,

    proxy: {
    	type: 'rest',
    	url: '/newslistpages',
    	//url: 'js/MainPage/data/news/newslist',
    	format: 'json',
    	reader: {
        	root: 'newslistpages'
    	}
	}
});
