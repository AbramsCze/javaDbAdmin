/**
 * Main view for the application.
 */
Ext.define('JavaDbAdmin.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    controller: 'main',
    plugins: 'viewport',
    fullscreen: true,

    layout: {
        type: 'vbox',
        align : 'stretch',
        pack  : 'start'
    },

    items: [{
        xtype : 'toolbar',
        layout: 'hbox',
        height: 40,
        items: [{
            xtype: 'container',
            flex: 1,
            layout: 'hbox',
            items: [{
                xtype: 'image',
                src: 'resources/images/logo.png',
                height: 32,
                width: 32,
                margin: '0 15 0 5',
                alt: 'Logo'
            },{
                xtype: 'label',
                html: '<h3>JavaDbAdmin</h3>'
            }]
        },{
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'table',
                columns: 3
            },
            defaults: {
                border: 0,
                margin: '0, 10, 4, 10',
                ui: 'connection'
            },
            items: [
                {html: 'Connected to:'},
                {html: '<strong>ZIS-CETIN-NEXT1</strong>', tooltip: 'Test'},
                {xtype: 'button', iconCls: 'x-fa fa-sign-out', width: 20, height:20, rowspan: 2, handler: 'onDisconnect'},
                {html: 'as:', style: 'text-align: right;'},
                {html: '<strong>ADMIN</strong>'}
            ]
        }]
    },{
        xtype: 'mainLayout',
        flex: 1
    }]
});
