Ext.define('Chaching.view.tenants.TenantsFormController', {
    extend: 'Chaching.view.common.form.ChachingFormPanelController',
    alias: 'controller.tenants-tenantsform',
    onOrganizationSelect: function (combo, record, eOpts) {
        var me = this,
            view = me.getView();
        var tenantListCombo = view.down('combobox[itemId=tenantItemId]');
        var tenantStore = tenantListCombo.getStore();
        tenantStore.getProxy().setExtraParams({ id: combo.getValue() });
        tenantStore.load();
    },
    onTenancyNameEnter: function (cmp, event, eOpts) {
        var me = this,
          view = me.getView();
        var tenantStore = view.down('combobox[itemId=tenantItemId]').getStore();
        var tenantRecord = tenantStore.findRecord('tenantName', cmp.getValue());
        if (tenantRecord == undefined && tenantStore.getCount() > 0) {
            view.down('gridpanel[itemId=moduleListGridItemId]').setDisabled(false);
        } else {
            view.down('gridpanel[itemId=moduleListGridItemId]').setDisabled(true);
        }
    },
    onModuleSelect: function (selModel , selected , eOpts) {
        var me = this,
           view = me.getView();
        var tenantListCombo = view.down('combobox[itemId=tenantItemId]');
        if (tenantListCombo.getValue() == undefined) {
            abp.message.info(app.localize('SelectTenantToCopyModules'));
            return;
        } else {
            var modules = [
                   { name: 'Vendors' },
                   { name: 'Users' },
                   { name: 'Customers' },
                    { name: 'Employees' },
                   { name: 'Roles' },
                   { name: 'ChartofAccounts' },
                   { name: 'ProjectChartofAccounts' }
            ];
            var moduleListGridStore = view.down('gridpanel[itemId=moduleListGridItemId]').getStore();
            moduleListGridStore.loadData(modules);
            
        }
    },
    doPreSaveOperation: function (record, values, idPropertyField) {
        var me = this,
             view = me.getView();
        record = Ext.create('Chaching.model.tenants.TenantsModel');
        Ext.apply(record.data, values);
        var moduleListGridStore = view.down('gridpanel[itemId=moduleListGridItemId]').getStore();
        var moduleRecords = moduleListGridStore.getModifiedRecords();
        var tenantListCombo = view.down('combobox[itemId=tenantItemId]');
        record.set('organizationUnit', values.id);
        record.set('sourceTenantId', tenantListCombo.getValue());
        if (moduleRecords && moduleRecords.length > 0) {
            moduleListArray = [];
            Ext.each(moduleRecords, function (rec) {
                moduleListArray.push(rec.get('name'));
            });
            record.data.moduleList = moduleListArray;
        }
        return record;
    }
    
});
