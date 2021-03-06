/**
 * SQL Editor view for the application. View allow define and evaluate user custom sql.
 */
Ext.define('JavaDbAdmin.view.sqlEditor.SqlEditor', {
    extend: 'Ext.form.Panel',
    xtype: 'sqlEditor',

    controller: 'sqlEditor',
    layout: 'fit',

    items: [{
        xtype: 'textareafield',
        emptyText: 'Insert SQL'
    }],

    tbar: [{
        xtype: 'button',
        iconCls: 'x-fa fa-play-circle-o',
        listeners: {
            click: 'onRun'
        }
    },{
        xtype: 'button',
        iconCls: 'x-fa fa-window-restore',
        listeners: {
            click: 'onNewTab'
        }
    }]
});
