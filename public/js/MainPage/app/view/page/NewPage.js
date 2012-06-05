Ext.define('CMS.view.page.NewPage', {
    extend: 'Ext.form.Panel',
    alias : 'widget.newpage',

    store:[/*'Pages'*/,'Contact'],
    id:'newpageform',
   // baseCls:'x-plain',
    layout: {
                    type: 'table',
                    //align: 'stretch',
                    columns:2,
                    
                },
    border: false,
    bodyPadding: 5,
    width: 700,
    height: 550,
    autoScroll:true,
    title:'Create new page',
    

    fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth:50,
                   
                    labelStyle: 'font-weight:bold'
                },
    defaults: {
                    margins: '0 20 0 0',
                    
                },
    autoShow: false,
   // autoScroll: true,
    
    
    items:[{	//flex: 1,
    	   		 xtype:'textfield',
    	   		 name:'name',
    	   		 fieldLabel:'Name',
    	   		 maxWidth:100,
    	   		 id:'name_field',
    	   		 colspan:2
    	   	
    	   },{
    	    
    	   	      xtype: 'textfield',
    	   	      name: 'title',
    	   	      fieldLabel: 'Title',
    	   	      maxWidth:100,
    	   	      id:'title_field',
    	   	      colspan: 2,
    	   	      
    	   },{
    	   	      xtype: 'htmleditor',
    	   	      name: 'content',
    	   	      fieldLabel: 'Content',
    	   	      width:690,
    	   	      colspan:2,
    	   	      id:'editor_field'
    	   },{
    	   		  xtype: 'textfield',
    	   		  name:  'status',
    	   		  fieldLabel: 'Status',
    	   		  maxWidth:100,
    	   		  id:'status_field',
    	   		  colspan:2,
    	   },{
    	   		  xtype:'textfield',
    	   		  name:'author',
    	   		  fieldLabel:'Author',
    	   		  maxWidth:100,
    	   		  id:'author_field',
    	   		  colspan:2,
    	   },{
    	   		  xtype: 'datefield',
    	   	      name: 'createdate',
    	   	      fieldLabel: 'Date',
    	   	      maxWidth:100,
    	   	      id:'date_field',
    	   	      colspan: 3,
    	   	      
    	   },{
    	   		  xtype:'combo',
    	   		  name:'parent_id',
    	   		  fieldLabel:'Parent_id',
    	   		  maxWidth:100,
    	   		  id:'parentid_field',
    	   		 // store:'Pages',
    	   		 // displayField: 'parent_id',
    	   		 // valueField: 'parent_id',
    	   	},{
    	   		  xtype:'combo',
    	   		  name:'modres_id',
    	   		  fieldLabel:'Module_id',
    	   		  maxWidth:100,
    	   		  id:'moduleid_field',
    	   		  store:'Contact',
    	   		  displayField:'id',
    	   		  valueField:'id'
    	   		 
    	   	}],

    
    buttons: [{
    	text: 'Save',
    	handler: function(btn){
            var  formview  = btn.up('form');
            var windowview = btn.up('window');
    	    formview.fireEvent('savepages', formview); 
    	    Ext.Msg.alert('Complete!', 'New page has been created!', function(btn, text){
    				if (btn == 'ok'){
      				windowview.close();
        							}
    	});
    	}
    }
    ,{
    	text: 'Cancel', 
    	handler: function(){
    	var	form = this.up('window');
	    		    form.destroy(); 
					
    	}
    }]

});



