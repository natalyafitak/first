Ext.define('CMS.view.user.ShareForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.shareform',
	
	items:[{
		xtype: 'button',
		handler: function() 
		{ window.location = "http://www.facebook.com/sharer.php?u=sencha.com&t=Sencha Docs" },
		cls: 'login-btn',
		iconCls: 'fb-icon'
	},{
		xtype: 'button',
		handler: function() 
		{ window.location = "http://vkontakte.ru/share.php?url=http://sencha.com" },
		cls: 'login-btn',
		iconCls: 'vk-icon'
	},{
		xtype: 'button',
		handler: function() 
		{ window.location = "https://twitter.com/intent/tweet?text=Sencha touch&url=http://sencha.com" },
		cls: 'login-btn',
		iconCls: 'tw-icon'
	}],
	
	
});


