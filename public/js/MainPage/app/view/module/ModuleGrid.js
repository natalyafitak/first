Ext.define('CMS.view.module.ModuleGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.modulegrid',
	
	store:'Modulegrid',
	
	columns:[{
		header:'Name', dataIndex:'name',},{
			
		header:'Version', dataIndex:'version',},
		{
		header:'Description', dataIndex:'description'
	}],
	bbar:{
		items:[{
			text:'Add'
		},{
			text:'Remove'
		},{
			text:'Update'
		}]
	}
});
