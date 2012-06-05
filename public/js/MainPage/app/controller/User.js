Ext.define('CMS.controller.User',{
	extend: 'Ext.app.Controller',
	
	views:[
		'user.LoginForm',
		'page.PagePanel'
		],
	
	init:function(){
		this.control({
			'viewport pagepanel':{
				render:this.onPageRender
			}
		});
	},
	
	onPageRender:function(p){
		//Show login form
		var lf = Ext.create('CMS.view.user.LoginForm',{});
		var wnd = Ext.create('Ext.window.Window',{});
		wnd.add(lf);
		wnd.show();
	}
});