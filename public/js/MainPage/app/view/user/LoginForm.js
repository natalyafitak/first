Ext.define('CMS.view.user.LoginForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.loginform',
	id : 'loginform',
	monitorResize: true,
	height :180,
	frame : true,
	tbar : [{
		xtype : 'button',
		text : 'Register'
	}, {
		xtype : 'button',
		text : 'Forgot your Password?'
	}],

	defaults : {
		margin : 5,
		xtype : 'textfield'
	},
	items : [{
		fieldLabel : 'Email',
		name : 'user[email]',
		width : 315,
		regex : /^([\w\-\'\-]+)(\.[\w-\'\-]+)*@([\w\-]+\.){1,5}([A-Za-z]){2,4}$/,
		allowBlank : false,
		emptyText : 'Your login name...',
		padding : '15 0 0 0',
		blankText : 'Enter your email',
		maxLength : 60,
		growMax : 30,
		boxMaxWidth : 150,
		maxLengthText : 'max length 30',
		minLength : 2,
		msgTarget : 'side'
	}, {
		fieldLabel : 'Password',
		name : 'user[password]',
		inputType : 'password',
		width : 315,
		allowBlank : false,
		blankText : 'Enter your password',
		maxLength : 30,
		growMax : 50,
		boxMaxWidth : 150,
		maxLengthText : 'max length 30',
		minLength : 6,
		msgTarget : 'side'
	}, {
		width : 200,
		xtype : 'checkbox',
		margin : '0 0 10 5',
		defaultType : 'checkboxfield',
		boxLabel : 'Remember me',
		name : 'user[remember_me]',
		inputValue : '1',
		enableKeyEvents: true
	}, {
		xtype : 'panel',
		height : 130,
		id : 'reCaptcha',
		border : false,
		hidden: true,
		html : '<div id="recaptcha_div" style="width:250px;" ></div>'
	}],
	buttons : [{
		width : 60,
		id : 'loginBtn',
		text : 'Login',
		margin: '0 5 10 0',
		formBind : true,
		
		 
	}]
	
});

