Ext.define('CMS.view.banner.BannerPanel',{
	extend:'Ext.grid.Panel',
	alias:'widget.bannerpanel',
	
	store:'Banners',
	
	columns:[{
		header:'Title', dataIndex:'title'
	}],
	
	bbar:{
		items:[{
			text:'Add'
		},{
			text:'Remove'
		},{
			text:'Update'
		},{
			text:'Save'
		}]
	}
});
