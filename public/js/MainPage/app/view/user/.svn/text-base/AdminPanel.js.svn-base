Ext.define('CMS.view.user.AdminPanel',{
	extend: 'Ext.form.Panel',
	alias: 'widget.adminpanel',
	
	//title: 'Panel with ButtonGroup',
    width: 400,
    height:97,
   // renderTo: document.body,
    bodyPadding: 10,
   // html: 'HTML Panel Content',
    tbar: [{
        xtype: 'buttongroup',
        columns: 5,
        title: 'Admin Panel',
        items: [{
            text: 'Add Module',
            scale: 'large',
            rowspan: 3,
            iconCls: 'add',
            iconAlign: 'top',
            id:'addcontact',
            cls: 'btn-as-arrow'
            },{
            xtype:'splitbutton',
            text: 'Menu Button',
            scale: 'large',
            rowspan: 3,
            iconCls: 'add',
            iconAlign: 'top',
            arrowAlign:'bottom',
            menu: [{ text: 'Menu Item 1' }]
        },{
            xtype:'splitbutton', text: 'Cut', iconCls: 'add16', menu: [{text: 'Cut Menu Item'}]
        },{
            text: 'Edit News', iconCls: 'add16'
        },{
            text: 'Else', iconCls: 'add16'
        }]
    }]
});