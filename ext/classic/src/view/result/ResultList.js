/**
 * Result view for the application. View showing result of sql queries to user.
 */
Ext.define('JavaDbAdmin.view.result.ResultList', {
    extend: 'Ext.grid.Panel',
    xtype: 'resultList',

    controller: 'sqlresult'
});
