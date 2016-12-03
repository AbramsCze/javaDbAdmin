/**
 * Controller for the SQL result view. It is specified as the "controller" of the result view class.
 */
Ext.define('JavaDbAdmin.view.connect.SqlResultController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sqlresult',

    // listen to refresh console event from any controller
    listen: {
        controller: {
            '*': {
                showSqlResult: 'onShow'
            }
        }
    },

    statics: {
        activateResultTab: function () {
            var southTabpanel = Ext.getCmp('south-tabpanel');
            var southResultTab = Ext.getCmp('south-result-tab');
            southTabpanel.setActiveTab(southResultTab);
        }
    },

    /**
     * Show sql result on top.
     * @param data to show.
     */
    onShow: function(data)
    {
        JavaDbAdmin.view.connect.SqlResultController.activateResultTab();

        // TODO dynamic model and store
    }
});
