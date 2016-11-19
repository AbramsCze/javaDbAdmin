/**
 * Store contains system messages.
 */
Ext.define('JavaDbAdmin.store.SystemMessages', {
    extend: 'Ext.data.Store',
    storeId: 'systemMessagesStore',
    singleton: true,

    data: [
        "Welcome to JavaDbAdmin!"
    ]
});
