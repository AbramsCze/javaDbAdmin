Ext.define('JavaDbAdmin.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'testList',

    requires: [
        'JavaDbAdmin.store.TestData'
    ],

    store: {
        type: 'testData'
    },

    columns: [
        { text: 'Název', dataIndex: 'name', width: 500 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
