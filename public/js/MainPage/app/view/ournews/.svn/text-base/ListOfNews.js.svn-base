var newstemplate = new Ext.XTemplate(
		'<tpl for = ".">',
'<div class="ournewsitem">',
'<div class="title">{title}</div>',
'<div class="dateofnew">{dateofnews}</div>',
'<div class="anounce"><img class="image" src="{imageurl}"  width="100" />{anounce}</div>',
'</div>',
'<div>',
'<a href=""><img class = "readmore" src="js/MainPage/data/news/readmore.jpg" alt="readmore" /></a>',
'<a href="" class="authorofnew"> by {author}</a>',
'</div>',
		'</tpl>'
	);

Ext.define('CMS.view.ournews.ListOfNews' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.listofnews',
    store: 'OurNews',
    autoScroll: true,

    columns: [{
    	text: 'News',  
    	xtype: 'templatecolumn', 
		tpl: newstemplate,
		flex:1,
		autoScroll: true,
	},{
		xtype: 'actioncolumn',
		width: 65,
		id: 'addicons',
		hidden: true,     //true to all, false to admin //false
		items: [{
			icon: 'js/MainPage/data/news/delete.png',
			tooltip: 'Delete',
			handler: function(grid, rowIndex, colIndex){
			var deleteicon = this.up('grid');
			 deleteicon.fireEvent('deletenews', deleteicon);	
		    }
		},{
			icon: 'js/MainPage/data/news/update.png',
			tooltip: 'Update',
			handler: function(icon, grid, rowIndex, colIndex){  //параметри не обовязкові
			var updateicon = icon.ownerCt
			console.log(updateicon);
			updateicon.fireEvent('updatenews', updateicon);
			}
		}]
	}],

      tbar: {
      	items: [{
      		text: 'Add your own new',
      		id: 'addnews',
      		hidden: true,
      		    		
      	}]
      }

});