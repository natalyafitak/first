Ext.define('CMS.view.user.ForgotPass', {
	extend : 'Ext.window.Window',
	alias : 'widget.forgotpass',
	title : 'Forgot your Password?',
	width : 500,
	height : 200,
	layout : 'fit',
	resizable : false,
	draggable : false,
	border : false,
	modal : true,

	items : [{
		xtype : 'form',
		frame : true,
		defaults : {
			margin : 10,
			width : 460
		},
		items : [{
			xtype : 'box',
			html : '<p> Please enter the e-mail address for your account.  You will be able to choose a new password for your account, after received email.</p>',
			height : 70
		}, {
			fieldLabel : 'Enter your email',
			name : 'user[email]',
			xtype : 'textfield',
			anchor : '100%',
			vtype : 'email',
			allowBlank : false,
			blankText : 'Enter your email!',
			maxLength : 30,
			maxLengthText : 'Max length 30',
			minLength : 3,
			boxMaxWidth : 300,
			msgTarget : 'side'
		}, {
			xtype : 'button',
			text : 'Submit',
			id : 'forgotBtn',
			width : 70,
			margin : '0 0 0 400',
			formBind: true
		}]

	}]

});
