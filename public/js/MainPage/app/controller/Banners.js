Ext.define('CMS.controller.Banners',{
	extend:'Ext.app.Controller',
		
    models:['Banner'],
    
    stores:['Banners'],
    
    views:['banner.BannerPanel','banner.BannerContainer','banner.BannerEditForm'],
    
    init:function(){
    	this.control({
    		'bannerpanel button[text=Add]':{
    			click:this.addBanner
    		},
    		'bannerpanel button[text=Remove]':{
    			click:this.removeBanner
    		},
    		'bannerpanel button[text=Update]':{
    			click:this.editBanner
    		},
    		'bannereditform':{
    			'beforesave':this.saveBanner
    		},
    		'bannerpanel button[text=Save]':{
    			click:this.saveOnServer
    		},
    		/*'viewport loginform':{
    			'userHasLoggedIn':function(user){console.log('User logged in!', user);},
    			'userHasLoggedOut':function(){console.log('User logged out');}
    		}*/
    	}); 
    },
    
    saveOnServer:function(){
    	Ext.data.StoreManager.lookup('Banners').sync();
    },
    addBanner:function(){
    	this.updateBanner(Ext.create('CMS.model.Banner',{title:'',content:''}));
    },
    
    updateBanner:function(banner){    	
    	var createBannerWindow = Ext.create('Ext.window.Window',{title:'Create banner',height:250,width:300});
    	var form = createBannerWindow.add({xtype:'bannereditform'});
    	form.loadRecord(banner);
    	createBannerWindow.show();
    },
    
    saveBanner:function(form){
    	var banner = form.getRecord();
    	banner.set(form.getValues());
    	var bannerstore = Ext.data.StoreManager.lookup('Banners');
    	bannerstore.add(banner);
    	
    	form.up('window').destroy();
    	/*banner.save({
    		callback:function(){
    			var bannerstore = Ext.data.StoreManager.lookup('Banners');
    			bannerstore.sync();
    		}
    	});*/
    },
    removeBanner:function(btn){
    	   	/*CMS.model.Banner.load(1,{
    		callback:function(banner){
    			console.log(banner);
    			banner.destroy();
    			var bannerstore = Ext.data.StoreManager.lookup('Banners');
    			bannerstore.load();
    		}
    		});*/
    		//console.log(btn.ownerCt.ownerCt);
    		var selectedBanners = btn.ownerCt.ownerCt.getSelectionModel().getSelection();
    		for (var i = 0; i<selectedBanners.length; i++){
    			selectedBanners[i].destroy();
    		}
    		var bannerstore = Ext.data.StoreManager.lookup('Banners');
    			bannerstore.load();
    	
    },
    editBanner:function(btn){
    	console.log('Arguments');
    	console.log(btn);
    	var selectedBanners = btn.up('grid').getSelectionModel().getSelection();
    	if (selectedBanners.length > 0){
    		this.updateBanner(selectedBanners[0]);
    	}
    }
    
});

