/**
 * Controller for the main view. It is specified as the "controller" of the Main view class.
 */
Ext.define('JavaDbAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onDisconnect: function ()
    {
        // Remove the localStorage key/value
        localStorage.removeItem('jdbacon');

        // Remove Main View
        this.getView().destroy();

        // Add the Connect Window
        Ext.create({
            xtype: 'connect'
        });
    }
});
