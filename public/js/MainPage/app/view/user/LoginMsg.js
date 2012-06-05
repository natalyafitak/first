Ext.define('CMS.view.user.LoginMsg', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.loginmsg',
	id : 'loginmsg',
	border : false,
	anchor : '100%',
	style : "border : 0",
	items : [{
		xtype: 'toolbar',
		items : [{
			xtype : 'tbtext'

		}, {
			width : 50,
			xtype : 'button',
			id : 'logoutBtn',
			text : 'Logout',
			style : "display: inline"

		}, {
			width : 55,
			xtype : 'button',
			id : 'setmenuBtn',
			text : 'Menu setting',
			style : "display: inline"

		}]
	}]
});
