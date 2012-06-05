Ext.define('CMS.store.Adminpanel', {
    extend: 'Ext.data.Store',
    model: 'CMS.model.Adminpanel',

  /* data: [
        {title: 'News1',  content: 'Some text' },
        {title: 'News2',  content: 'Some text' },
        {title: 'News3',  content: 'Some text' }
    ]
});*/
autoLoad: true,

    proxy: {
    type: 'ajax',
    url: 'modres.json',
    reader: {
        type: 'json',
        root: 'modres',
        successProperty: 'success'
    }
}
});
