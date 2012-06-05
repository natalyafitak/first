Ext.define('CMS.view.ournews.EditNews', {
    extend: 'Ext.form.Panel',
    alias : 'widget.editnews',

    title : 'Edit News',
    layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
    border: false,
    bodyPadding: 10,
    width: 700,
    height: 510,

    fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                   
                    labelStyle: 'font-weight:bold'
                },
    defaults: {
                    margins: '0 0 10 0'
                },
    autoShow: true,



    	   items: [{
    	   		  xtype: 'filefield',
    	   		  name:  'imageurl',
    	   		  fieldLabel: 'Image',
    	   		  buttonText: 'Browse',
    	   		  
    	   },{
    	   	      xtype: 'textfield',
    	   	      name: 'title',
    	   	      fieldLabel: 'Title'
    	   },{
    	   	      xtype: 'htmleditor',
    	   	      name: 'anounce',
    	   	      fieldLabel: 'Anounce'
    	   },{
    	   		  xtype: 'htmleditor',
    	   	      name: 'content',
    	   	      fieldLabel: 'Content'
    	   }],

    
    buttons: [{
    	text: 'Save',
    	handler: function(){
            var  formochka  = this.up('form');
            var form =  this.up('form').getForm();//знаходимо форму рухаючись догори замість постійного використання ownerCt
    	    formochka.fireEvent('savenews', formochka, form); // form параметри моделі які ми передаємо у savenews
    	}
    },{
    	text: 'Cancel', 
    	handler: function(){
	    	   var	forma = this.up('window');
	    		    forma.destroy();  		
    	}
    },{
    	       text: 'Upload',
        handler: function() {
            var form = this.up('form').getForm();
            //console.log(o),
            //console.log(fp)
            if(form.isValid()){
                form.submit({
	  	    		url: 'newslistpages/fotonewsupload',
                    /*waitMsg: 'Uploading your photo...',
                    
                    
                    success: function(newslistpage) {
                    	
                        Ext.Msg.alert('Success', 'Your photo "' + newslistpage+ '" has been uploaded.');
                    }*/
                });
            }
        }
    }]

});



