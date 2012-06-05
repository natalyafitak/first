Ext.define('CMS.store.Users', {
    extend: 'Ext.data.Store',
    model: 'CMS.model.User',
    autoLoad: true,

   proxy: {
    type: 'rest',
    url: '/users', 
    format:'json',
    reader: {
	root : 'users'
	}
    }
});