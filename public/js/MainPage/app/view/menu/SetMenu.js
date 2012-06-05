Ext.define('CMS.view.menu.SetMenu', {
	extend : 'Ext.window.Window',
	alias : 'widget.setmenu',
	id : 'setmenu',
	title : 'Create a new menu item',
	width : 400,
	height : 400,
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
			fieldLabel : 'Title',
			name : 'user[email]',
			xtype : 'textfield',
			anchor : '100%',
			//vtype : 'email',
			allowBlank : false,
			blankText : 'Enter name of new link!',
			maxLength : 100,
			maxLengthText : 'Max length 100',
			minLength : 3,
			boxMaxWidth : 300,
			msgTarget : 'side'
		}, {
			fieldLabel : 'Parent ID',
			//id: 'pwd',
			name : 'user[password]',
			//inputType : 'password',
			xtype : 'textfield',
			allowBlank : false,
			blankText : 'Enter parent ID',
			maxLength : 30,
			growMax : 50,
			boxMaxWidth : 300,
			maxLengthText : 'max length 100',
			minLength : 1,
			anchor : '100%',
			msgTarget : 'side'
		}, {
			fieldLabel : 'Url  (e.g.www.google.com)',
			//id: 'confirmpwd',
			name : 'user[password_confirmation]',
			inputType : 'password',
			xtype : 'textfield',
			//validationEvent:"blur",
			allowBlank : false,
			blankText : 'Enter URL',
			maxLength : 30,
			growMax : 50,
			boxMaxWidth : 300,
			maxLengthText : 'max length 100',
			minLength : 6,
			anchor : '100%',
			msgTarget : 'side',
			
		},{
			xtype : 'button',
			text : 'Create',
			id : 'register',
			width : 75,
			margin : '0 0 0 300',
			formBind: true

		}]
	}]

});
