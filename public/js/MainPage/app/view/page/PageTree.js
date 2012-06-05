Ext.define('CMS.view.page.PageTree', {
	extend: 'Ext.panel.Panel',
	alias:'widget.pagetree',

    
    initComponent:function(){
    	this.callParent(arguments);
    	
    	this.tree = this.add({
    		xtype:'treepanel',
    		title: 'Page Tree',
		    width: 200,
		    height: 170,
		    store: 'PageTree',
		    rootVisible: false,
		        	});
		        }
});
