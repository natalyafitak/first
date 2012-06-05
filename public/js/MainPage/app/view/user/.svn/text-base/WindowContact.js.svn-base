Ext.define('CMS.view.user.WindowContact', {
    extend : 'Ext.window.Window',
    alias: 'widget.wincontact',
     
	   title : 'new window',
	      			layout: {
                 //   type: 'vbox',
                //    align: 'stretch'
                },
        			layout: 'anchor',
        			border: false,
        
        			title: 'Your Module',
        			bodyStyle:'padding:5px 5px 0',
        			width: 800,
        				fieldDefaults: {
            			labelAlign: 'top',
						labelWidth: 100,
            			labelStyle: 'font-weight:bold'
        								},
       			defaults: {
                margins: '0 0 10 0'
	   					},
		initComponent: function() {
			
			
        	this.items =  [{
        			
					xtype: 'fieldcontainer',
                    fieldLabel: 'Your Module',
                    labelStyle: 'font-weight:bold;padding:0',
                    layout: 'hbox',
                    defaultType: 'textfield',
					itemId:'edit',
                    fieldDefaults: {
                        labelAlign: 'top'
                    },
            items:[{
                flex: 1,
                		itemId: 'name',
                        xtype:'textfield',
                       	name: 'Name',
                        fieldLabel: 'Name',
                        allowBlank: false,
                        margins: '0 0 0 0',
                        maxWidth:'50%'
                    }]
            },{
               
              		flex: 2,
              		itemId:'version',
              		xtype: 'textfield',
                    fieldLabel: 'Version',
                    vtype: 'alphanum',
                    allowBlank: false
                },{
                	itemId:'description',
                    xtype: 'textareafield',
                    fieldLabel: 'Description',
                    labelAlign: 'top',
                    flex: 1,
                    margins: '0',
                    allowBlank: false
                
				
            
        },
		
		
		] ;
           
        

        this.buttons =  [
		
		{
            text: 'Cancel',
            //action: 'close',
			handler: function() {
				this.up('window').hide();
				this.up('window').reset();
			}
			
        },{
            text: 'Create',
            action:'submit',
		 handler: function() {
				this.up('fieldcontainer').reset();
			}
			}
     //   }
		
		];
    

		
		   
	    this.callParent(arguments);
	   }
	   
		
});
