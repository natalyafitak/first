Ext.define('CMS.view.Viewport', {
	extend:'Ext.container.Viewport',
                            layout : 'border',
                            autoScroll: true,
                            items  : [{
                                region : 'north',
                                
                                items : [{
                                	xtype : 'cmsmenu',
                                	height:32
                                }]
                            },{
                               region      : 'west',
                                xtype       : 'panel',
                                width       : 340,
                                collapsible : true,
                                title       : 'WEST',
                                    items : [{
                                        xtype : 'loginform',
                                        hidden : false
                                    },{
                                    	xtype:'pageview',
                                    	height: 200
                                    },{
                                    	//xtype:'adminpanel'
                                    }]
                            }, {
                                region  : 'center',
                                autoScroll: true,
                                id:'mainview',
                                items   : [{
                                        layout : 'anchor',
                                        //xtype: 'comments',
                                        xtype : 'pageviewnews',
                                        anchor: '100% 100%'
                                    }]
                            }, {
                                region      : 'east',
                                xtype       : 'panel',
                                autoScroll  : true,
                                width       : 500,
                                collapsible : true,
                                items       : [{
                                	xtype: 'generalprofile'
                                },{
                                	xtype: 'fm'
                                },{
                                
                                xtype: 'pagetree'
                                }]
                            }, {
                                region  : 'south',
                                xtype   : 'panel',
                                border : false,
                                
                                items   : [{
                                    xtype  : 'shareform',
                                    height : 30,
                                    width  : 140,
                                    cls    : 'x-panel-body-default-framed',
                                    layout : 'anchor',
                                    html   : '<g:plusone href:"sencha.com" size="small"></g:plusone>',
                                    border : false,
                                    frame  : 'false',
                                    
							},{
                                //	xtype:'contactform'

                }]
               }]
              })
