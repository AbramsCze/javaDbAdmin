/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('JavaDbAdmin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'JavaDbAdmin',

    stores: [
        // TODO: add global / shared stores here
    ],

    views: [
        'JavaDbAdmin.view.connect.Connect',
        'JavaDbAdmin.view.main.Main'
    ],
    
    launch: function ()
    {
        // Check to see the current value of the connection in localStorage
        var constr = localStorage.getItem("jdbacon");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: !!constr ? 'app-main' : 'connect'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
