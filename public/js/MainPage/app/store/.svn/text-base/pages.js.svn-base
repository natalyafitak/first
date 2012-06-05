Ext.define('CMS.store.pages', {
    extend: 'Ext.data.Store',
    model: 'CMS.model.Pages',
    autoLoad: true,

   proxy: {
    type: 'REST',
    url: 'pages',
    reader: {
        type: 'json',
        root: 'pages',
        successProperty: 'success'
    }
}
});