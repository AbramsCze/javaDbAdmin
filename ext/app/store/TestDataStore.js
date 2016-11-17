Ext.define('JavaDbAdmin.store.TestData', {
    extend: 'Ext.data.Store',
    storeId: 'testDataStore',

    alias: 'store.testData',

    model: 'JavaDbAdmin.model.TestData',

    proxy: {
        type: 'rest',
        url: 'http://localhost:9966/javaDbAdmin/testData/6',
        reader: {
            type: 'json'
        }
    }
    //autoLoad: true
});
