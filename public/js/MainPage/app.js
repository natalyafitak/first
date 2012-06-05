Ext.Loader.setConfig({
    enabled : true
});

Ext.application({
    name        : 'CMS',

    appFolder   : 'js/MainPage/app',
    
    controllers : [
    	'Share', 
    	'Widcontroller', 
    	'Login', 
    	'Menu',
    	'OurNews', 
    	'Blocks', 
    	'Contact',
    	'Banners',
    	'Profilecont',
    	'FM',
    	'OneNews',
    	'DeleteNews',
		'Comments',
		'Upload',
		'Pages'
    ],
    	
    autoCreateViewport:true,

    launch: function() {
                        
  
        
    }
});
