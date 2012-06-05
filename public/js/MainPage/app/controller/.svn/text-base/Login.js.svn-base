Ext.define('CMS.controller.Login', {
	extend : 'Ext.app.Controller',

	models : ['User'],

	stores : ['Users'],

	views : ['user.LoginForm', 'user.RegisterForm', 'user.ForgotPass', 'user.LoginMsg','menu.SetMenu'],

	init : function() {

		this.control({

			'viewport button[text=Register]' : {
				click : this.registerForm
			},
			'viewport button[text=Forgot your Password?]' : {
				click : this.forgotPassword
			},
			'#forgotBtn' : {
				click : this.forgotForm
			},
			'viewport button[text=Login]' : {
				 click : this.login
			},
			'#logoutBtn' : {
				click : this.logout
			},
			'#setmenuBtn' : {
				click : this.setmenu
			},
			'#register' : {
				click : this.registUser
			},
			'cmsmenu' : {
				menurendered : this.showLoginMSG
			},
			'loginform textfield' : {
				specialkey: function(field, e) {
		            if(e.getKey() == e.ENTER) {
		               this.login();
		            }
		        }
			}
		});
		//Ext.util.Cookies.set("failure", 0);
		
		window.NewCMS = window.NewCMS ? window.NewCMS : {};
	},

	showLoginMSG : function(menutoolbar) {
		menutoolbar.add([{
			xtype : 'tbfill'
		}, {
			xtype : 'loginmsg',
			height : 27,
			width : 300,
			hidden : true

		}]);
		this.checkIfLogin();
	},
	checkIfLogin : function(callbackFunc) {

		Ext.Ajax.request({
			url : '/users/checklogin',
			method : 'GET',
			scope : this,
			success : function(res) {
				var response = Ext.decode(res.responseText);
				if(response.success) {
					this.loginMsg(response.user);
				} else {
					this.loginMsg();
				}
				if( typeof callbackFunc == 'function') {
					callbackFunc(response);
				}
			},
			failure : function(frm, res) {
				Ext.Msg.alert('Error', "Can't checkIfLogin!");
			}
		});
	},
	registerForm : function(button) {
		//var s = Ext.util.Cookies.get("failure");
		//alert(s);
		Ext.widget('registerform').show();
	},
	registUser : function(button) {

		var regCmp = button.up("form");
		regCmp.getForm().submit({
			url : '/users',
			method : 'POST',
			scope : this,
			waitTitle : 'Connecting',
			waitMsg : 'Sending data...',
			success : function(frm, res) {
				Ext.Msg.alert('Congradulations', 'Your account was created successfully. Please activate it via sent email');
				regCmp.up("window").close();
				var response = Ext.decode(res.response.responseText);
				//this.loginMsg(response.user.email);
			},
			failure : function(frm, res) {
				var response = Ext.decode(res.response.responseText);
				Ext.Msg.alert('Registration failed', response.errors);
				//regCmp.up("window").close();
			}
		});

	},
	forgotPassword : function(button) {
		var forgotform = Ext.widget('forgotpass');
		forgotform.show();
	},
	forgotForm : function(button) {
		var forCmp = button.up("form");
		forCmp.getForm().submit({
			url : '/users/password',
			method : 'POST',

			waitTitle : 'Connecting',
			waitMsg : 'Sending data...',
			success : function(frm, res) {
				Ext.Msg.alert('Massge', 'You will receive an email with instructions about how to reset your password in a few minutes.');
				forCmp.up("window").close();

			},
			failure : function(frm, res) {
				var response = Ext.decode(res.response.responseText);
				Ext.Msg.alert('Forgot password problem', response.errors);
			}
		});

	},
	login : function(button) {
		var loginfrm = Ext.ComponentQuery.query('viewport loginform')[0];
		var challengeFld, responseFld = "none";
		var captchaCreated = false;
		if(Ext.getDom('recaptcha_div').hasChildNodes()) {
			challengeFld = Recaptcha.get_challenge();
			responseFld = Recaptcha.get_response();
			captchaCreated = true;
		}
		loginfrm.getForm().submit({
			url : '/users/sign_in',
			method : 'POST',
			scope : this,
			waitTitle : 'Connecting',
			waitMsg : 'Sending data...',
			params : {
				recaptcha_challenge_field : challengeFld,
				recaptcha_response_field : responseFld
			},
			success : function(frm, res) {
				var response = Ext.decode(res.response.responseText);
				var recaptchaCont = Ext.getCmp('reCaptcha');
				var loginFrm = Ext.getCmp('loginform');
				this.loginMsg(response.user);
				if(captchaCreated) {
					Recaptcha.destroy();
					recaptchaCont.hide();
					loginFrm.height = 180
				}
			},
			failure : function(frm, res) {
				if(res.response.responseText.substring(0, 1) === "{") {
					var response = Ext.decode(res.response.responseText);
					Ext.Msg.alert('Error', response.errors);

					if(response.count == 3) {
						var loginFrm = Ext.getCmp('loginform');
						loginFrm.height = 300
						this.createCaptcha();
						var recaptchaCont = Ext.getCmp('reCaptcha');
						recaptchaCont.show();
					}
				} else {
					Ext.Msg.alert('Error', res.response.responseText);

				}

				loginfrm.getForm().reset();
				if(captchaCreated) {
					Recaptcha.reload();
				}
			}
		});

	},
	createCaptcha : function() {
		Recaptcha.create("6Lee7tESAAAAAGce2_twho9R4jO0jEqj8aHrOX4C", 'recaptcha_div', {
			theme : "white",
			callback : Recaptcha.focus_response_field
		});
	},
	logout : function(button) {
		Ext.Ajax.request({
			url : '/users/sign_out',
			method : 'DELETE',
			scope : this,
			success : function(frm, res) {
				this.loginMsg();
				//Ext.util.Cookies.set("failure", 0);
			},
			failure : function(frm, res) {
				Ext.Msg.alert('Error', 'Something wrong here!');
			}
		});
	},
	
	    setmenu : function(button) {
		Ext.widget('setmenu').show();
	},
		
		
	
	
	loginMsg : function(user) {
		var loginfrm = Ext.ComponentQuery.query('viewport loginform')[0];
		var loginmsg = Ext.ComponentQuery.query('#loginmsg')[0];
		var panelWest = Ext.ComponentQuery.query("viewport panel[title='WEST']")[0];
		if(user) {
			panelWest.collapse(false);
			loginmsg.down('tbtext').update('Signed in as ' + user.email.split('@')[0] + '! Not you? ');
			loginmsg.show();
			loginfrm.hide();
			loginfrm.getForm().reset(); user.role_id === 1 ? user.role = 'admin' : user.role = 'user';
			loginfrm.fireEvent('userHasLoggedIn', user);
			window.NewCMS.user = user;
		} else {
			if (Ext.util.Cookies.get("failure") >= 3){
				this.createCaptcha();
				var loginFrm = Ext.getCmp('loginform');
				loginFrm.height = 300
				var recaptchaCont = Ext.getCmp('reCaptcha');
				recaptchaCont.show();			
			}
			loginmsg.hide();
			loginfrm.show();
			panelWest.expand(true);
			loginfrm.fireEvent('userHasLoggedOut');
			if (typeof window.NewCMS.user != undefined){
				window.NewCMS.user = {};
			}
		}

	}
});

