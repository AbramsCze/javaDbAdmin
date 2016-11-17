Ext.define('JavaDbAdmin.store.AvaibleConnections', {
    extend: 'Ext.data.Store',
    alias: 'store.avaibleConnections',

    model: 'JavaDbAdmin.model.AvaibleConnections',

    proxy: {
        type: 'rest',
        url: 'http://localhost:9966/javaDbAdmin/connections/avaibleConnections',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
