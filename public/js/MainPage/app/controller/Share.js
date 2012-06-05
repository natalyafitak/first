Ext.define('CMS.controller.Share',{
	extend: 'Ext.app.Controller',
	
	
	views:['user.ShareForm'],
	
	init:function(){
		
		
		this.control({
			'viewport shareform':{
				render:this.onPageRender
			}
		});
	},
		onPageRender:function(po){
	/*	//Show login form
		var lf = Ext.create('MainPage.view.user.LoginForm',{});
		var wnd = Ext.create('Ext.window.Window',{});
		wnd.add(lf);
		wnd.show();
		*/
		
	/*	 window.___gcfg = {
        lang: 'en-US'
      };

      (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		
      })();*/
	}
	
	
});