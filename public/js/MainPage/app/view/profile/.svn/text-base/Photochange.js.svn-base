Ext.define('CMS.view.profile.Photochange', {
    extend:'Ext.form.Panel',
	alias: 'widget.photochange',
    title: 'Upload a Photo',
    width: 400,
    frame: true,
    items: [{
        xtype: 'fileuploadfield',
        name: 'photograph',
        fieldLabel: 'Photo',
        labelWidth: 50,
        msgTarget: 'side',
        allowBlank: false,
        anchor: '100%',
        buttonText: 'Select Photo...'
    }],

    buttons: [{
        text: 'Upload',
        handler: function() {
         var form = this.up('form').getForm();
            if(form.isValid()){
                form.submit({
                    url: '/profiles/fileupload',
                    waitMsg: 'Uploading your photo...',
                    success: function(fp, o) {
                        Ext.Msg.alert('Success', 'Your photo "' + o.result.file + '" has been uploaded.');
                    }
                });
            }
        }
    },{
    	text: 'Cancel', 
    	handler: function(){
	    	   var	forma = this.up('window');
	    		    forma.destroy();  		
    	}
    }]
});