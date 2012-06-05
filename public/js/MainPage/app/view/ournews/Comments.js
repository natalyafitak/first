
Ext.define('CMS.view.ournews.Comments',{
	extend: 'Ext.form.Panel',
	alias:'widget.comments',
	width: '100%',
	store: 'Comments',
	
   
	
		items: [{
			xtype: 'listofcomments'		
		},{	
			xtype: 'onecomment',
			hidden: true,
			id: 'onecomment'		
		}]
			
			
		
		
});
