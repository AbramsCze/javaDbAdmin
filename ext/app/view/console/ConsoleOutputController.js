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

    statics: {
        activateConsoleTab: function () {
            var southTabpanel = Ext.getCmp('south-tabpanel');
            var southConsoleTab = Ext.getCmp('south-console-tab');
            southTabpanel.setActiveTab(southConsoleTab);
        }
    },

    // clear output
    onClear: function()
    {
        JavaDbAdmin.store.SystemMessages.data.clear();
        this.fireEvent('refreshConsole');
    },

    // refresh console
    onRefresh: function()
    {
        var container = Ext.getCmp('south-console-tab');
        container.removeAll(true, true);
        container.add(container.buildItems());

        JavaDbAdmin.view.console.ConsoleOutputController.activateConsoleTab();
    },

    // getter for store items
    getStoreItems: function()
    {
        return this.store.data.items;
    }
});
