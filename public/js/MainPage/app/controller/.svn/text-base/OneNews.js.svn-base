
Ext.define('CMS.controller.OneNews',{
	extend: 'Ext.app.Controller',
	stores:[
	'OurNews',
	'Comments'
	],
	models: [
	'OurNews',
	'Comments'
	],
	views: [
	'ournews.ListOfNews',
	'ournews.OneNews',
	'ournews.ListOfComments',
	'ournews.Comments',
	'page.PageView',
    'ournews.EditNews',
    'ournews.OneComment',
	],
	
	init: function(){
		this.control({
			'listofnews': {
				itemdblclick: this.Changenew //itemdblclick витягує обєкти моделі та вюшки запускає функцію Changenew
			},

			'onenews':{    //після того як в нас завантажився changeofnews ми передаємо йому html
				afterrender:this.onChangeOfNewsRender,   // з допомогою render
			},	
			'comments':{
				render: this.showCommentForm	
			  				  
			}
		})
	},	
	/*checkIfLogin : function(callbackFunc) {

		Ext.Ajax.request({
			url : '/users/checklogin',
			method : 'GET',
			scope : this,
			success : function(res) {
				console.log(res)
				var response = Ext.decode(res.responseText);
				if(response.success	&& typeof callbackFunc == 'function') {
					callbackFunc(response);
				}
			},
			failure : function(frm, res) {
				Ext.Msg.alert('Error', "Can't checkIfLogin!");
			}
		});
	},
	showCommentForm:function(comments){
		this.checkIfLogin(function(){

			Ext.getCmp('onecomment').show();
		});
	},*/
	
	showCommentForm:function(comments){
		
		
		
		//this.checkIfLogin(function(){
			
			if (window.NewCMS.user.role == 'user'){
				Ext.getCmp('onecomment').show();
			}
			else if (window.NewCMS.user == ''){
				Ext.getCmp('onecomment').hide();
			}
			
			
		//});
		
	},
	
	onChangeOfNewsRender:function(panel){  //переписуємо html що описаний у newstemplate
			onenewstemplate.overwrite(panel.body, {
				title:      panel.model.get('title'),
			    dateofnews: panel.model.get('dateofnews'),
			    contenturl: panel.model.get('contenturl'),
			    imageurl:   panel.model.get('imageurl'),
			    author:     panel.model.get('author')  
			    });
		
	},                                     //panel its an  Ext.Component this :)look at sencha
	     
    Changenew: function(view, objectofmodel){
	     	var mainview = Ext.getCmp('mainview');   //знаходить компонент по id 
	     	mainview.removeAll();     //стирає всі дочерні елементи
	     	mainview.add({xtype:'onenews', model:objectofmodel});  //додає новий дочірний елемент changeofnews
	     	mainview.add({ xtype: 'comments', model:objectofmodel});

	     	// і передаєм обєкт моделі що прийшов від itemdblclick
	     }
	
	      
	
});
