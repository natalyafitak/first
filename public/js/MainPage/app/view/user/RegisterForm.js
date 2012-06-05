Ext.define('CMS.view.user.RegisterForm', {
	extend : 'Ext.window.Window',
	alias : 'widget.registerform',
	id : 'registerform',
	title : 'Registration',
	width : 400,
	height : 200,
	layout : 'fit',
	resizable : false,
	draggable : false,
	border : false,
	modal : true,

	items : [{
		
		xtype : 'form',
		id : 'new_user',
		frame : true,
		defaults : {
			margin : 10,
			width : 350,
			height : 'auto',

		},

		items : [{
			fieldLabel : 'Email',
			name : 'user[email]',
			xtype : 'textfield',
			anchor : '100%',
			vtype : 'email',
			allowBlank : false,
			blankText : 'Enter your email!',
			maxLength : 100,
			maxLengthText : 'Max length 100',
			minLength : 3,
			boxMaxWidth : 300,
			msgTarget : 'side'
		}, {
			fieldLabel : 'Password',
			id: 'pwd',
			name : 'user[password]',
			inputType : 'password',
			xtype : 'textfield',
			allowBlank : false,
			blankText : 'Enter your password',
			maxLength : 30,
			growMax : 50,
			boxMaxWidth : 300,
			maxLengthText : 'max length 30',
			minLength : 6,
			anchor : '100%',
			msgTarget : 'side'
		}, {
			fieldLabel : 'Confirm password',
			id: 'confirmpwd',
			name : 'user[password_confirmation]',
			inputType : 'password',
			xtype : 'textfield',
			validationEvent:"blur",
			allowBlank : false,
			blankText : 'Confirm your password',
			maxLength : 30,
			growMax : 50,
			boxMaxWidth : 300,
			maxLengthText : 'max length 30',
			minLength : 6,
			anchor : '100%',
			msgTarget : 'side',
			validator : function() {
				var formPanel = Ext.getCmp("registerform");
				// Save the fields we are going to insert values into
				var pass1 = Ext.getCmp('pwd').getValue();
				var pass2 = Ext.getCmp('confirmpwd').getValue();
				if(pass1 == pass2)
					return true;
				else
					return "Passwords do not match!";
			}
		},{
			xtype : 'button',
			text : 'Submit',
			id : 'register',
			width : 75,
			margin : '0 0 0 300',
			formBind: true

		}]
	}]

});
