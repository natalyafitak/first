Ext.define('CMS.view.user.ShareForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.shareform',
	
	border:false,
	
	
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
	}/*,{
		//xtype: 'button',
		html: '<img src="Logosweb.png" />',
		cls: 'logo',
		height: 63,
		width: 65,
		border: false
		
	}*/],
	
	
});


