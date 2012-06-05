Ext.define('CMS.view.page.Page', {
    extend : 'Ext.panel.Panel',
    alias  : 'widget.pageview',
    id: 'pageview',
    
    title:'PagePanel',
    tools: [
        {
        	id:'plus',
            type: 'plus',
            tooltip: 'New Page',
            action:'plus',
           /* handler: function(objectofmodel,event, target, owner, tool){
            	var newPage = Ext.create('Ext.window.Window');
    	var pageform = newPage.add({xtype: 'newpage'});
 	          pageform.loadRecord(objectofmodel);
 	          newPage.show();
            
            var destination = tool.owner;
            console.log(destination);
            
            }*/
            
        },
        {
            type: 'minus',
            tooltip: 'Delete Page',
            action:'minus'
          
        },
        {
            type: 'next',
            tooltip: 'Next',
            action:'next',
          
        }
    ],

});