
Ext.define('CMS.view.ournews.OneComment',{
	extend: 'Ext.form.Panel',
	alias:'widget.onecomment',
	width: '100%',
	store: 'Comments',

	
	height: 200,
	border: false,
	
	fieldDefaults: {
           labelAlign: 'top',
           labelWidth: 100,               
           labelStyle: 'font-weight:bold'
                },
			
			layout: {
				type: 'vbox',
				align: 'stretch',
				margin: 10, 
				},

			items: [{
			
				fieldLabel: 'Add your own comment',
				xtype: 'htmleditor',
				name: 'content',	     
				width: '100%',
				border: false,
			},{
				buttons: [{
				  	text: 'Save',
				  	action: 'saveonecomment',
				},{
					text: 'Cancel'
				}]
			}]

			
			
		
		
});
