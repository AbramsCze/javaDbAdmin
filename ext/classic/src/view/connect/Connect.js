/**
 * Connect view for the application. Default view which defines what db connection will be used.
 */
Ext.define('JavaDbAdmin.view.connect.Connect', {
    extend: 'Ext.window.Window',
    xtype: 'connect',

    requires: [
        'JavaDbAdmin.store.AvaibleConnections'
    ],

    controller: 'connect',
    bodyPadding: 10,
    title: 'Welcome to JavaDbAdmin',
    iconCls: 'x-fa fa-database',
    closable: false,
    autoShow: true,
    height: 200,
    width: 400,
    y: 80,
    layout: 'fit',

    ui: 'connection',

    items: {
        xtype: 'form',
        reference: 'form',

        ui: 'connection',
        border: 0,

        items: [{
            xtype: 'combo',
            fieldLabel: 'Database',
            store: {
                type: 'avaibleConnections'
            },
            displayField: 'connectionDesc',
            valueField: 'connectionId',
            forceSelection: true,
            allowBlank: false,
            width: '100%'
        },{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false,
            width: '100%'
        },{
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            width: '100%'
        },{
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'All fields are required'
        }],

        buttons: [{
            text: 'Connect',
            formBind: true,
            listeners: {
                click: 'onConnect'
            }
        }]
    }
});
