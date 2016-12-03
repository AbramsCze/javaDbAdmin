/**
 * Result view for the application. View showing result of sql queries to user.
 */
Ext.define('JavaDbAdmin.view.result.ResultList', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultList',

    controller: 'sqlresult',

    html: 'result panel'
});
