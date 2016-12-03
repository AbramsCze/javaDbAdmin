/**
 * Console output view for the application. View showing system messages to user.
 */
Ext.define('JavaDbAdmin.view.console.ConsoleOutput', {
    extend: 'Ext.panel.Panel',
    xtype: 'consoleOutput',

    controller: 'consoleOutput',

    layout: {
        type: 'vbox',       // Arrange child items vertically
        align: 'stretch',    // Each takes up full width
        padding: 5
    },

    tbar: [{
        xtype: 'button',
        iconCls: 'x-fa fa-trash-o',
        listeners: {
            click: 'onClear'
        }
    }],
    scrollable: true,

    initComponent: function()
    {
        Ext.apply(this, {
            items: this.buildItems()
        });

        this.callParent(arguments);
    },

    buildItems: function ()
    {
        var items = [];
        var data = this.getController().getStoreItems();

        for (var i = data.length-1; i >= 0; i--)
        {
            items.push({
                xtype: 'box',
                autoEl: {cn: data[i].data},
                padding: 5
            });
        }
        return items;
    }
});
