/**
 * Controller for the sql editor view. It is specified as the "controller" of the SQL Editor view class.
 */
Ext.define('JavaDbAdmin.view.connect.SqlEditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sqlEditor',

    // send sql to server
    onRun: function(sqlInputId)
    {
        var sql = Ext.getCmp(sqlInputId).getValue();
        var globalScope = this;

        // log sql query to console
        JavaDbAdmin.store.SystemMessages.add('Sql query > ' + sql);
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
    }
});
