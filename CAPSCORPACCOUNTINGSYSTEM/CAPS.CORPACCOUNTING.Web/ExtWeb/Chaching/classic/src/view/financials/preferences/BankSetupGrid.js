﻿/**
 * The class is created to provide main UI to access Bank Set Up .
 * Author: kamal
 * Date: 26/05/2016
 */
/**
 * @class Chaching.view.financials.preferences.BankSetupGrid
 * UI design for preference.
 * @alias widget.financials.preferences.banksetup
 */
Ext.define('Chaching.view.financials.preferences.BankSetupGrid', {
    extend: 'Chaching.view.common.grid.ChachingGridPanel',

    requires: [
        'Chaching.view.financials.preferences.BankSetupGridController'
    ],
    xtype: 'widget.financials.preferences.banksetup',
    name: 'Financials.Preferences.BankSetup',
    controller: 'financials.preferences.banksetupgrid',
    modulePermissions: {
        read: abp.auth.isGranted('Pages.Financials.Preferences.BankSetup'),
        create: abp.auth.isGranted('Pages.Financials.Preferences.BankSetup.Create'),
        edit: abp.auth.isGranted('Pages.Financials.Preferences.BankSetup.Edit'),
        destroy: abp.auth.isGranted('Pages.Financials.Preferences.BankSetup.Delete')
    },
    padding: 5,
    gridId: 21,
    store: 'financials.preferences.FiscalPeriodStore',
    headerButtonsConfig: [
      {
          xtype: 'displayfield',
          value: abp.localization.localize("FiscalPeriod"),
          ui: 'headerTitle'
      }, '->', {
          xtype: 'button',
          scale: 'small',
          ui: 'actionButton',
          action: 'create',
          text: abp.localization.localize("Add").toUpperCase(),
          tooltip: app.localize('CreateNewFiscalPeriod'),
          checkPermission: true,
          iconCls: 'fa fa-plus',
          routeName: 'financials.preferences.BankSetup.create',
          iconAlign: 'left'
      }],
    requireExport: true,
    requireMultiSearch: true,
    requireMultisort: true,
    isEditable: true,
    editingMode: 'row',
    columnLines: true,
    multiColumnSort: true,
    editWndTitleConfig: {
        title: app.localize('EditProject').initCap(),
        iconCls: 'fa fa-pencil'
    },
    createWndTitleConfig: {
        title: app.localize('CreateNewFiscalPeriod').initCap(),
        iconCls: 'fa fa-plus'
    },
    createNewMode: 'tab',
    isSubMenuItemTab: true,
    //listeners: {
    //    cellclick: 'onProjectsCellClick'
    //},
    columns: [
         {
             xtype: 'gridcolumn',
             text: app.localize('FiscalStartDate'),
             dataIndex: 'yearStartDate',
             sortable: true,
             groupable: true,
             width: '10%',
             // renderer: Chaching.utilities.ChachingRenderers.rendererHyperLink,
             filterField: {
                 xtype: 'datefield',
                 width: '100%',
                 emptyText: app.localize('ToolTipFiscalStartDate')
             }, editor: {
                 xtype: 'datefield',
                 allowBlank: false
             }
         }, {
             xtype: 'gridcolumn',
             text: app.localize('FiscalEndDate').initCap(),
             dataIndex: 'yearEndDate',
             sortable: true,
             groupable: true,
             width: '15%',
             // renderer: Chaching.utilities.ChachingRenderers.rendererHyperLink,
             filterField: {
                 xtype: 'datefield',
                 width: '100%',
                 emptyText: app.localize('ToolTipFiscalEndDate')
             }, editor: {
                 xtype: 'datefield',
                 allowBlank: false
             }
         }, {
             xtype: 'checkcolumn',
             text: app.localize('FiscalYearOpen').initCap(),
             dataIndex: 'isYearOpen',
             sortable: false,
             groupable: false,
             // renderer: Chaching.utilities.ChachingRenderers.rendererHyperLink,
             width: '13%'
         }

    ]
});
