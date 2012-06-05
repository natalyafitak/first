Ext.define('CMS.view.banner.BannerEditForm',{
	extend:'Ext.form.Panel',
	alias:'widget.bannereditform',
	
	items:[{
		xtype:'textfield',
		fieldLabel: 'Title',
		name:'title'
	},{
		xtype: 'htmleditor',
		name:'content'
	}],
	
	buttons:[{
		text:'Save',
		handler:function(){
			//console.log('Beforesave');
			var form = this.up('form');
			//console.log(form);
			form.fireEvent('beforesave',form);
		}
	}]
});
