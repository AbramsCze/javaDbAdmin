/**
 * Controller for the connection view, which manage connection. It is specified as the "controller" of the Connect view class.
 */
Ext.define('JavaDbAdmin.view.connect.ConnectController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.connect',

    // create connection to database
    onConnect: function()
    {
        // TODO MP request to backend

        // Set identification of connection to local storage
        localStorage.setItem("jdbacon", "md77Jla");

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });
    }
});
