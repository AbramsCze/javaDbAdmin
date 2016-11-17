/**
 * Controller for the sql editor view. It is specified as the "controller" of the SQL Editor view class.
 */
Ext.define('JavaDbAdmin.view.connect.SqlEditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sqlEditor',

    // send sql to server
    onRun: function(sqlInputId)
    {
        Ext.Ajax.request({
            url: 'http://localhost:9966/javaDbAdmin/sql',
            method: 'POST',
            params: {
                query: Ext.util.JSON.encode(Ext.getCmp(sqlInputId).getValue())
            },
            success: function(transport)
            {
                // TODO log status and show result
                var result = Ext.util.JSON.decode(transport.responseText, true);
                console.log(result);
            },
            failure: function(transport)
            {
                // TODO log communication failure
                Ext.Msg.alert("Communication fail");
            }
        });
    }
});
