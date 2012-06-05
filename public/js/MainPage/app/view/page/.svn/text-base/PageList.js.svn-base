Ext.define('CMS.view.page.PageList',{
	extend:'Ext.grid.Panel',
	alias:'widget.pagelist',
	
	store:'PageList',
	width: 900,
	
	//layout: 'fit',
	
	columns:[{
			header:'id', dataIndex:'id',
			},{
			header:'Name', dataIndex:'name'
			},{
			header:'Title', dataIndex:'title',
			},{
			header:'Content', dataIndex:'content'
		},{
			header:'Date', dataIndex:'createdate'
		},{
			header:'Author', dataIndex:'author'
		},{
			header:'Status', dataIndex:'status'
		},{
			header:'Parent_id', dataIndex:'parent_id'
		},{
			header:'Module_id', dataIndex:'module_id'
		}],
	bbar:{
		items:[
			//text:'Add'
			{
			text:'Remove',
			action:'delete'
		},{
			text:'Update'
		}]
	}
});
