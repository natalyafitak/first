var commentstemplate = new Ext.XTemplate(
		'<tpl for = ".">',
'<div class="ournewsitem">',
'<div class="dateofcomments">{created_at}</div>',
'<div class="anounce">{content}</div>',
'</div>',
'<div>',

'<a href="" class="authorofnew"> by {author}</a>',
'</div>',
		'</tpl>'
	);



Ext.define('CMS.view.ournews.ListOfComments',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.listofcomments',
	store: 'Comments',
	autoScroll: true,
	
	columns: [{
		text: 'Comments',  
    	xtype: 'templatecolumn', 
		tpl: commentstemplate,
		flex:1,
		autoScroll: true,
		
	}]
	
	
});