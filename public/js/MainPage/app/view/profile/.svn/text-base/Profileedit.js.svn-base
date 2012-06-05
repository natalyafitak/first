Ext.define('CMS.view.profile.Profileedit', {
    extend:'Ext.form.Panel',
	alias: 'widget.profileedit',
    items: [{
    	xtype: 'textfield',
        fieldLabel: 'Name',
        name: 'name',
        allowBlank: false,
        width: 280
    }, {
        xtype: 'textfield',
        fieldLabel: 'Last name',
        name: 'lastname',
        allowBlank: false,
        width: 280
    }, {
    	xtype: 'textfield',
    	fieldLabel: 'E-mail',
        name: 'email',
        vtype: 'email',
        allowBlank: false,
        width: 280
    }, {
    	xtype: 'textfield',
    	fieldLabel: 'Phone number',
    	name: 'phone',
        width: 280
    }, {
    	xtype: 'textfield',
    	fieldLabel: 'Address',
    	name: 'address',
        width: 280
    }, {
    	xtype: 'textarea',
    	fieldLabel: 'About me',
    	name: 'about',
        width: 280
    }],
	buttons: [{
    	text: 'Save',
		handler:function(){
			var form = this.up('form');
			form.fireEvent('saveprofile',form);
		}
    },{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    },{
    	text: 'Cancel', 
    	handler: function(){
	    	   var	forma = this.up('window');
	    		    forma.destroy();  		
    	}
    }]
});
