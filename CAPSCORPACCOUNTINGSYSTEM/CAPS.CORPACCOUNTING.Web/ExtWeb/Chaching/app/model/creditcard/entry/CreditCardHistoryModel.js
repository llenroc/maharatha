﻿Ext.define('Chaching.model.creditcard.entry.CreditCardHistoryModel', {
    extend: 'Chaching.model.base.TransactionDetailsModel',
    config: {
        searchEntityName: ''
    },
    fields: [
       { name: 'statementDate', type: 'date', dateFormat: 'c' },
       { name: 'purchaseOrderNumber', type: 'string' },
       { name: 'jobId', type: 'int', defaultValue: null, convert: nullHandler },
       { name: 'jobNumber', type: 'string' },
       { name: 'accountId', type: 'int', defaultValue: null, convert: nullHandler },
       { name: 'accountNumber', type: 'string' },
       { name: 'purchaseOrderReference', type: 'string' },
       { name: 'vendorId', type: 'int', defaultValue: null, convert: nullHandler },
       { name: 'vendorName', type: 'string' },
       { name: 'chargeDate', type: 'date', dateFormat: 'c' },
       { name: 'cardHolderName', type: 'string' },
       { name: 'apPaymentNumber', type: 'string' },
       { name: 'apCodingAccountId', type: 'int' },
       { name: 'apCodingAccountNumber', type: 'string' },
       { name: 'apCodingJobId', type: 'int' },
       { name: 'apCodingJobNumber', type: 'string' },
        { name: 'apCodingSubAccountId1', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId2', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId3', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId4', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId5', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId6', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId7', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId8', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId9', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountId10', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'apCodingSubAccountNumber1', type: 'string' },
        { name: 'apCodingSubAccountNumber2', type: 'string' },
        { name: 'apCodingSubAccountNumber3', type: 'string' },
        { name: 'apCodingSubAccountNumber4', type: 'string' },
        { name: 'apCodingSubAccountNumber5', type: 'string' },
        { name: 'apCodingSubAccountNumber6', type: 'string' },
        { name: 'apCodingSubAccountNumber7', type: 'string' },
        { name: 'apCodingSubAccountNumber8', type: 'string' },
        { name: 'apCodingSubAccountNumber9', type: 'string' },
        { name: 'apCodingSubAccountNumber10', type: 'string' },
        { name: 'uploadDocumentLogID', type: 'int', defaultValue: null, convert: nullHandler },
        { name: 'uploadDocumentLog', type: 'string'},
        { name: 'status', type: 'int', defaultValue: null, convert: nullHandler }
    ]
});
