﻿Ext.define('Chaching.data.proxy.BaseProxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.chachingProxy',
    timeout: 6000000,
    limitParam: 'maxResultCount',
    startParam: 'skipCount',
    sortParam: 'sorting',
    filterParam: 'filtering',
    pageParam:'',
    headers: {
        'Accept': 'application/json'
    },
    actionMethods: { create: 'POST', read: 'GET', update: 'POST', destroy: 'POST' },
    paramsAsJson: true,
    listeners:
    {
        exception: function (proxy, request, operation) {
            if (request.responseText != undefined) {
                // responseText was returned, decode it
                try {
                    var responseObj = Ext.decode(request.responseText, true);
                    
                } catch (e) {
                    Ext.Msg.alert('Error', 'Unknown error: The server did not send any information about the error.');
                }

            }
            else {
                // no responseText sent
                Ext.Msg.alert('Error', 'Unknown error: Unable to understand the response from the server');
            }
        }
    }
});