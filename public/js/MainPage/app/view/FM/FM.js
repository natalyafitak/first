Ext.define('CMS.view.FM.FM', {
	extend: 'Ext.panel.Panel',
	alias:'widget.fm',

    
    initComponent:function(){
    	this.callParent(arguments);
    	
    	this.tree = this.add({
    		xtype:'treepanel',
    		title: 'Simple Tree',
		    width: 200,
		    height: 150,
		    store: 'FMs',
		    rootVisible: false,
		        	});
    	this.files = this.add({
    		xtype:'grid',
    		title: 'SimpleView',
    		width: 200,
    		height: 150,
    		store: 'FMsf',
    		columns:[
    			{ header: 'Id',  dataIndex: 'id' },
        { header: 'Name', dataIndex: 'name' },
        { header: 'Type', dataIndex: 'filetype' },
        { header: 'Folder_id', dataIndex: 'folderid' }
    		]
    	});
    
    }
});
