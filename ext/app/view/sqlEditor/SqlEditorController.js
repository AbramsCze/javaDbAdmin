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
                var result = Ext.util.JSON.decode(transport.responseText, true);

                console.log(result); // TODO show result
            },
            failure: function(transport)
            {
                // TODO log communication failure
                Ext.Msg.alert("Communication fail");
            }
        });
    }
});
