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

        if(data.length > 0)
        {
            var model = this.createSqlResultModel(data[0]);
            var store = this.createSqlResultStore(model, data);
            this.getView().setColumns(this.createSqlResultColumns(data[0]));
            this.getView().setStore(store);
        }
    },

    /**
     * Create model of current sql result.
     * @param firstItem of result.
     * @returns {Ext.data.Model}
     */
    createSqlResultModel: function(firstItem)
    {
        var fieldsModel = [];

        //create dynamic fields
        for (key in firstItem)
        {
            var fieldModel = {};
            fieldModel.mapping = fieldModel.name = key;
            fieldsModel.push(fieldModel);
        }

        //create model
        return Ext.create('Ext.data.Model', {
            fields: fieldsModel
        });
    },

    /**
     * Create store of current model and sql result.
     * @returns {Ext.data.Store}
     */
    createSqlResultStore: function(model, data)
    {
        return Ext.create('Ext.data.Store', {
            model: model,
            data: data
        });
    },

    /**
     * Create columns model of current sql result.
     * @param firstItem of result.
     * @returns {Array}
     */
    createSqlResultColumns: function(firstItem)
    {
        var columnsModel = [];

        //create dynamic columns
        for (key in firstItem)
        {
            var columnModel = {};
            columnModel.text = columnModel.dataIndex = key;
            columnsModel.push(columnModel);
        }
        return columnsModel;
    }
});
