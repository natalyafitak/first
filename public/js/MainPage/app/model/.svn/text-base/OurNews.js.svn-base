Ext.define('CMS.model.OurNews', {
    extend: 'Ext.data.Model',
    fields: [{
    	name: 'id',
    	type: 'integer'
    },{
    	name:'title',
    	type: 'string'
    },{
      	name: 'contenturl',
      	type: 'string'
    },{
      	name: 'imageurl',
      	type: 'string'
    },{
    	name: 'anounce',
    	type: 'string'
    },{
    	name: 'dateofnews',
    	type: 'datetime',
    	format : "d.m.Y"
    },{
    	name: 'author',
    	type: 'string'
    },{
    	name: 'pageid',
    	type: 'integer'
    }],
    
    proxy: {
    type: 'rest',
    url: '/newslistpages',
    format: 'json'
    }

});