﻿Ext.define('Chaching.model.financials.accounts.AccountsModel', {
    extend: 'Chaching.model.base.BaseModel',
    config: {
        searchEntityName: 'Account'
    },
    fields: [
            { name: 'accountId', type: 'int', isPrimaryKey: true },
            { name: 'parentId', type: 'int', defaultValue: null, convert: nullHandler },
            { name: 'caption', type: 'string' , headerText : 'Caption', hidden : false, width : '8%' },
            { name: 'description', type: 'string' },
            { name: 'chartOfAccountId', type: 'int', defaultValue: null, convert: nullHandler },
            { name: 'accountNumber', type: 'string', headerText : 'AccountNumber', hidden : false, width : '8%' },
            { name: 'creditAccountNumber', type: 'string', mapping: 'accountNumber' },
            { name: 'creditAccountId', type: 'int', defaultValue: null, mapping: 'accountId' },
            { name: 'isAccountRevalued', type: 'boolean' },
            { name: 'isApproved', type: 'boolean' },
            { name: 'isDescriptionLocked', type: 'boolean' },
            { name: 'isElimination', type: 'boolean' },
            { name: 'isEnterable', type: 'boolean' },
            { name: 'isRollupAccount', type: 'boolean' },
            { name: 'isRollupOverridable', type: 'boolean' },
            { name: 'linkAccountId', type: 'int', defaultValue: null, convert: nullHandler },
             { name: 'linkAccount', type: 'string' },
            { name: 'linkJobId', type: 'int', defaultValue: null, convert: nullHandler },
            { name: 'rollupAccountId', type: 'int', defaultValue: null, convert: nullHandler },
            { name: 'rollupJobId', type: 'int', defaultValue: null, convert: nullHandler },
            { name: 'typeOfAccountId', type: 'int', defaultValue: null, convert: nullHandler },
            { name: 'typeOfAccount', type: 'string' },
            { name: 'typeofConsolidationId', type: 'auto' },
            { name: 'typeofConsolidation', type: 'string' },
             { name: 'typeOfCurrencyId', type: 'auto' },
            { name: 'typeOfCurrency', type: 'string' },
             { name: 'typeOfCurrencyRateId', type: 'int', defaultValue: null, convert: nullHandler },
            { name: 'typeOfCurrencyRate', type: 'string' },
            { name: 'isDocControlled', type: 'boolean' },
            { name: 'isSummaryAccount', type: 'boolean' },
            { name: 'isBalanceSheet', type: 'boolean' },
            { name: 'isUs1120BalanceSheet', type: 'boolean' },
            { name: 'isProfitLoss', type: 'boolean' },
            { name: 'isUs1120IncomeStmt', type: 'boolean' },
            { name: 'isCashFlow', type: 'boolean' },
            { name: 'cashFlowName', type: 'string' },
            { name: 'us1120BalanceSheetName', type: 'string' },
            { name: 'balanceSheetName', type: 'string' },
            { name: 'profitLossName', type: 'string' },
            { name: 'us1120IncomeStmtName', type: 'string' },
            { name: 'isActive', type: 'boolean' },
            { name: 'rollUpAccountCaption', type: 'string' },
             { name: 'RollUpDivision', type: 'string' }
            
    ]
});