Ext.define('CMS.store.Widgets', {
    extend : 'Ext.data.Store',
	model: 'CMS.model.Widmodel',
	autoLoad: true/*,
	proxy: {
        type: 'ajax',
        url : 'wigts.json',
        format: 'json'
    }*/
});
