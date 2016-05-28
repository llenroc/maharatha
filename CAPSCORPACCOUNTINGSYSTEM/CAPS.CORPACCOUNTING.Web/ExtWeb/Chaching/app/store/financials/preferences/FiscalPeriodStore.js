﻿Ext.define('Chaching.store.financials.preferences.FiscalPeriodStore', {
    extend: 'Chaching.store.base.BaseStore',
    model: 'Chaching.model.financials.preferences.FiscalPeriodModel',
    proxy: {
        type: 'chachingProxy',
        actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
        extraParams: {
            organizationUnitId: null

        },
        api: {
            create: abp.appPath + 'api/services/app/fiscalYear/CreateFiscalYearUnit',
            read: abp.appPath + 'api/services/app/fiscalYear/GetFiscalYearUnits',
            update: abp.appPath + 'api/services/app/fiscalYear/UpdateFiscalYearUnit',
            destroy: abp.appPath + 'api/services/app/fiscalYear/DeleteFiscalYearUnit'
        }
    },
    idPropertyField: 'fiscalYearId'//important to set for add/update of records
});
