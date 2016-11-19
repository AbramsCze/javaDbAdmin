/**
 * Controller for the console output view. It is specified as the "controller" of the Console Output view class.
 */
Ext.define('JavaDbAdmin.view.console.ConsoleOutputController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.consoleOutput',

    store: JavaDbAdmin.store.SystemMessages,

    // listen to refresh console event from any controller
    listen: {
        controller: {
            '*': {
                refreshConsole: 'onRefresh'
            }
        }
    },

    // clear output
    onClear: function()
    {
        // TODO clear messages
        Ext.Msg.alert("Console output clear");
    },

    // refresh console
    onRefresh: function()
    {
        var container = Ext.getCmp('consoleOutput');
        container.removeAll(true, true);
        container.add(container.buildItems());

    },

    // getter for store items
    getStoreItems: function()
    {
        return this.store.data.items;
    }
});
