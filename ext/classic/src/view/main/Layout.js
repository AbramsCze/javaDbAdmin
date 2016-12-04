/**
 * Main layout for the application.
 */
Ext.define('JavaDbAdmin.view.main.Layout', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainLayout',

    ui: 'main-layout',

    layout: 'border',
    items: [{
        region: 'south',
        height: 300,
        split: true,
        id: 'south-region-container',
        layout: 'fit',
        items: [{
            xtype: 'tabpanel',
            id: 'south-tabpanel',
            items: [{
                title: 'Console',
                id: 'south-console-tab',
                iconCls: 'x-fa fa-wpforms',
                xtype: 'consoleOutput'
            },{
                title: 'Result',
                id: 'south-result-tab',
                iconCls: 'x-fa fa-table',
                xtype: 'resultList'
            }]
        }]
    },{
        title: 'Db view',
        iconCls: 'x-fa fa-database',
        region: 'west',
        width: 200,
        split: true,
        collapsible: true,
        id: 'west-region-container',
        layout: 'fit'
    },{
        region: 'east',
        width: 500,
        split: true,
        layout: 'fit',
        items: [{
            xtype: 'tabpanel',
            items: [{
                title: 'Columns',
                iconCls: 'x-fa fa-list-alt',
                html: 'Console tab'
            },{
                title: 'Indexes',
                iconCls: 'x-fa fa-list-alt',
                xtype: 'testList'
            },{
                title: 'Primary key',
                iconCls: 'x-fa fa-key',
                xtype: 'testList'
            },{
                title: 'Foreign keys',
                iconCls: 'x-fa fa-list-alt',
                xtype: 'testList'
            },{
                title: 'Grants',
                iconCls: 'x-fa fa-list-alt',
                xtype: 'testList'
            }]
        }]
    },{
        region: 'center',
        id: 'center-region-container',
        layout: 'fit',
        items: [{
            xtype: 'tabpanel',
            items: [{
                title: 'Home',
                iconCls: 'x-fa fa-home',
                html: 'Home Screen'
            },{
                title: 'SQL Editor',
                iconCls: 'x-fa fa-edit',
                layout: 'fit',
                items: [{
                    xtype: 'sqlEditor'
                }]
            }]
        }]
    }]
});
