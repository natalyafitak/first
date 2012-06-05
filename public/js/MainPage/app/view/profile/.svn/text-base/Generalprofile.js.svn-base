var profiletemp = new Ext.XTemplate(
'<tpl for=".">',
'<div class="container">',
   '<div class="one">',
     '<img class="profilephoto" src="{photograph}"/>',
   '</div>',
   '<div class="two">',
     '<div class="whois">{name} {lastname}</div>',
     '<div class="labels">',
       '<div class="inform">',
           '<div class="showdata">Phone number: </div>',
           '<div class="showdata">E-mail: </div>',
           '<div class="showdata">Address: </div>',
           '<div class="showdata">About me: </div>',
       '</div>',
       '<div class="inform2">',
			'<div class="showdata">{phone}</div>',
			'<div class="showdata">{email}</div>',
			'<div class="showdata">{address}</div>',
			'<div class="showdata">{about}</div>',
		'</div>',
		'</div>',
    '</div>',
'</div>',
'</tpl>'
);	
	
	
	Ext.define('CMS.view.profile.Generalprofile', {
    extend:'Ext.grid.Panel',
	alias: 'widget.generalprofile',
	store: 'Profiles',
    title: false,
    columns:[{
		text: 'Welcome to user profile page',  
    	xtype: 'templatecolumn', 
		tpl: profiletemp,
		flex:1,
		autoScroll: true,
	}],
	bbar:{
		items:[{
			text:'Edit'
		},{
			text: 'Change'
		}]
	}
});