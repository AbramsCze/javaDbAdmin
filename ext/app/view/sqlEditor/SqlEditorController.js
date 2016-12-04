/**
 * Controller for the sql editor view. It is specified as the "controller" of the SQL Editor view class.
 */
Ext.define('JavaDbAdmin.view.connect.SqlEditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sqlEditor',

    // send sql to server
    onRun: function()
    {
        var sql = this.getView().child('[xtype=textareafield]').getValue();
        var globalScope = this;

        // log sql query to console
        JavaDbAdmin.store.SystemMessages.add('(' + new Date().toLocaleTimeString() + ' SQL query) > ' + sql);
        this.fireEvent('refreshConsole');

        // send to server
        Ext.Ajax.request({
            url: 'http://localhost:9966/javaDbAdmin/sql',
            method: 'POST',
            params: {
                query: Ext.util.JSON.encode(sql)
            },
            success: function(transport)
            {
                // get and show sql result
                var result = Ext.util.JSON.decode(transport.responseText, true);
                globalScope.fireEvent('showSqlResult', result);
            },
            failure: function(transport)
            {
                // communication fail
                JavaDbAdmin.store.SystemMessages.add('Connection to server failed > ' + transport.status + ':' + transport.responseText);
                globalScope.fireEvent('refreshConsole');
            }
        });
    },

    // open new SQL editor tab
    onNewTab: function()
    {
        var tabpanel = this.getView().up('tabpanel');
        tabpanel.insert(this.createSqlEditorWindow());
    },

    /**
     * Create new definition of SQL editor window.
     * @returns {Array}
     */
    createSqlEditorWindow: function()
    {
        var sqlEditor = [];
        sqlEditor.title = 'SQL Editor';
        sqlEditor.iconCls = 'x-fa fa-edit';
        sqlEditor.layout = 'fit';
        sqlEditor.items = {xtype: 'sqlEditor'};
        sqlEditor.closable = true;
        return sqlEditor;
    }
});
