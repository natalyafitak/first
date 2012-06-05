Ext.define('CMS.controller.Menu', {
    extend : 'Ext.app.Controller',
	
	models:['CMSMenu'],
    
    stores:['Menus'],
    
    views:[
    	'menu.Menu',
    	//'menu.MenuEditForm'
    ],
    
    init:function(){
    	this.control({
    		'cmsmenu':{
    			'render':this.cmsmenuRender
    		}
    	});
    },
    
    cmsmenuRender:function(menutoolbar){
    	//
    	var menuStore = Ext.data.StoreManager.lookup('Menus');
    	//console.log('Menu store:');
    	//console.log(menuStore);
    	menuStore.load({
    		scope : {
    			controller:this,
    			ui:menutoolbar
    		},
		    callback: function(records, operation, success) {
		        //the operation object contains all of the details of the load operation
		       // console.log('Menu items:');
		        this.controller.buildTree(this.ui,records);
		        this.ui.fireEvent('menurendered',this.ui);
		    }
    	});
    },
    
    buildTree:function(toolbar,menuitems){
    	//console.log('Buildtree');
    	//console.log(menuitems);
    	
    	function build(ui,store){   		
    		store.each(function(mitem){
    			var cfg = {text:mitem.get('title')}
    			var urla = {href:mitem.get('url')}
    			if (mitem.cmsmenus().getCount()>0){
    				cfg.menu = {}
    				urla.menu = {}
    			}
    			var menuitemui = ui.add(cfg);
    			if (mitem.cmsmenus().getCount()>0){
    				build(menuitemui.menu,mitem.cmsmenus());
    			}
	    		
    		});    		
    	}
    	
    	
    	
    	//Ext.Array.each(menuitems[0].cmsmenus,function(mitem){
    	Ext.Array.each(menuitems,function(mitem){
    		var cfg = {text:mitem.get('title')};
    		var urla = {href:mitem.get('url')};
    		if (mitem.cmsmenus().getCount()>0){
    			cfg.menu = {}
    			urla.menu = {}				
    		}
    		
    		var menuitemui = toolbar.add(cfg);
    		//console.log('menuitems');
    		//console.log(mitem);
    		if (mitem.cmsmenus().getCount()>0){
    			build(menuitemui.menu,mitem.cmsmenus());
    		}
    		
    	},this);
    	
    }
});