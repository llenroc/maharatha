/**
 * The base class for all transaction details/distribution grids
 * Author: Krishna Garad
 * Date : 17/05/2016
 */
/**
 * Grids are an excellent way of showing large amounts of tabular data on the client side.
 * Essentially a supercharged `<table>`, GridPanel makes it easy to fetch, sort and filter
 * large amounts of data.
 *
 * Grids are composed of two main pieces - a {@link Ext.data.Store Store} full of data and
 * a set of columns to render.
 *
 * ## Basic GridPanel
 *
 *     @example
 *     Ext.create('Ext.data.Store', {
 *         storeId: 'simpsonsStore',
 *         fields:[ 'name', 'email', 'phone'],
 *         data: [
 *             { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
 *             { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
 *             { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
 *             { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
 *         ]
 *     });
 *
 *     Ext.create('Chaching.view.common.grid.ChachingTransactionDetailGrid', {
 *         title: 'Simpsons',
 *         store: Ext.data.StoreManager.lookup('simpsonsStore'),
 *         columns: [
 *             { text: 'Name', dataIndex: 'name' },
 *             { text: 'Email', dataIndex: 'email', flex: 1 },
 *             { text: 'Phone', dataIndex: 'phone' }
 *         ],
 *         height: 200,
 *         width: 400,
 *         renderTo: Ext.getBody()
 *     });
 *
 * The code above produces a simple grid with three columns. We specified a Store which
 * will load JSON data inline.
 * In most apps we would be placing the grid inside another container and wouldn't need to
 * use the {@link #height}, {@link #width} and {@link #renderTo} configurations but they
 * are included here to make it easy to get up and running.
 *
 * The grid we created above will contain a header bar with a title ('Simpsons'), a row of
 * column headers directly underneath and finally the grid rows under the headers.
 *
 * **Height config with bufferedRenderer: true**
 *
 * The {@link #height} config must be set when creating a grid using
 * {@link #bufferedRenderer bufferedRenderer}: true _and_ the grid's height is not managed
 * by an owning container layout.  In Ext JS 5.x bufferedRendering is true by default.
 *
 */
Ext.define('Chaching.view.common.grid.ChachingTransactionDetailGrid',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Chaching.view.common.grid.ChachingTransactionDetailGridController',
        'Chaching.view.common.grid.ChachingTransactionDetailGridModel',
        'Chaching.components.plugins.CellEditing',
        'Ext.grid.selection.SpreadsheetModel',
        'Ext.grid.plugin.Clipboard'
    ],

    controller: 'common-grid-chachingtransactiondetailgrid',
    viewModel: {
        type: 'common-grid-chachingtransactiondetailgrid'
    },
    /**
    * @cfg {object} config object for the grid.
    */
    config: {
        //Set true to use multisearch on grid columns.
        requireMultiSearch: true,
        //Set true to allow multiple column sorting
        requireMultisort: true,
        //Set true to allow data display in groups.
        requireGrouping: true,
        //Module specific columns list. Those columns will be combined with base columns.
        moduleColumns: null,
        //Array of columns names to order the columns. To hide any base column just ignore to add in this list
        columnOrder: null,
        //Set this property to true if having grouped header.
        isGroupedHeader: false,
        //Object grouped header base config
        groupedHeaderBaseConfig: null,
        //Object grouped header module columns config
        groupedHeaderModuleConfig:null,
        //Provide module specific buttons object array to add in the grid's toolbar
        moduleButtons: null,
        //Set to tru if summary is required for grid. Defaults to true
        requireSummary: true,
        //Set module permissions of parent.
        modulePermissions: {
            read: true,
            create: true,
            edit: true,
            destroy: true
        },
        cls: 'chaching-transactiongrid'
    },
    /**
    * @cfg {string/object} Store for the grid.
    */
    store: null,
    columnLines: true,
    padding: 5,
    frame: false,
    layout: {
        type: 'fit'
    },
    cls: 'chaching-transactiongrid',
    initComponent:function() {
        var me = this,
            controller = me.getController();
        var features = [],
            plugins = [],
            dockedItems = [];
        //verify grid configuration first
        if (!me.getModuleColumns()) Ext.Error.raise('Please provide module columns for the grid');
        if (!me.getColumnOrder()) Ext.Error.raise('Please provide column order.');
        if (!me.store) Ext.Error.raise('Please provide store configuration');
        if (me.getIsGroupedHeader() && !me.getGroupedHeaderBaseConfig())Ext.Error.raise('Please provide group header config to add columns in group');
        var columns = me.getColumnsForGrid();
        if (columns) {
            me.columns = columns;
        }
        var gridStore = me.store;
        if (typeof (gridStore) === "string") {
            me.store = Ext.create('Chaching.store.' + gridStore);
        }
       
        //add grouping if required
        if (me.getRequireGrouping()) {
            var groupingFeature = {
                ftype: 'grouping',
                hideGroupedHeader: true,
                startCollapsed: true
            };
            features.push(groupingFeature);
        }
        //add summary feature
        if (me.getRequireSummary()) {
            var summaryFeature = {
                ftype: 'summary',
                dock: 'bottom'
            };
            features.push(summaryFeature);
        }
        if (me.getRequireMultiSearch()) {
            var mutisearch = {
                ptype: 'saki-gms',
                iconColumn: false,
                clearItemIconCls: 'icon-settings',
                pluginId: 'gms',
                height: 32,
                filterOnEnter: false,
                viewModel: {
                    type: 'common-grid-chachingtransactiondetailgrid'
                }
            };
            plugins.push(mutisearch);
        }
        me.selModel = {
            type: 'spreadsheet',
            columnSelect: true,
            checkboxSelect: false,
            pruneRemoved: false,
            extensible: 'y'
        };
        var modulePermissions = me.getModulePermissions();
        if (modulePermissions.edit || modulePermissions.create) {
            plugins.push({
                ptype: 'clipboard'
            });

            var editingModel = {
                ptype: 'chachingCellediting',
                pluginId: 'editingPlugin',
                clicksToEdit: 2,
                //listeners: {
                //    beforeedit: 'onBeforeGridEdit'
                //}
            }
            plugins.push(editingModel);
        }
        var defaultButtons = me.getDefaultActionButtons();
        if (defaultButtons&&defaultButtons.length>0) {
            var toolBar = {
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'plainBottom',
                layout: {
                    type: 'hbox',
                    pack: 'left'
                },
                items: defaultButtons
            };
            dockedItems.push(toolBar);
        }
        me.dockedItems = dockedItems;
        me.plugins = plugins;
        me.features = features;
        me.callParent(arguments);
    },
    getDefaultActionButtons:function() {
        var me = this,
            modulePermissions = me.getModulePermissions(),
            buttons = [];
        buttons.push('->');
        if (modulePermissions.create||modulePermissions.edit) {
            var addNew = {
                xtype: 'button',
                scale: 'small',
                name: 'AddNewRecord',
                itemId: 'AddNewRecord',
                iconCls: 'fa fa-plus-square',
                ui: 'actionButton',
                tooltip: app.localize('InsertRecord')
            };
            buttons.push(addNew);
        }
        if (modulePermissions.destroy) {
            var deleteBtn = {
                xtype: 'button',
                scale: 'small',
                name: 'DeleteRecord',
                itemId: 'DeleteRecord',
                iconCls: 'fa fa-trash',
                ui: 'actionButton',
                tooltip: app.localize('DeleteRecord')
            };
            buttons.push(deleteBtn);
        }
        var refreshBtn = {
            xtype: 'button',
            scale: 'small',
            name: 'RefreshData',
            itemId: 'RefreshData',
            iconCls: 'fa fa-refresh',
            ui: 'actionButton',
            tooltip: app.localize('RefreshData')
        };
        buttons.push(refreshBtn);
        return buttons;
    },
    getColumnsForGrid:function() {
        var me = this,
            columns = undefined,
            columnOrder = me.getColumnOrder();
        var baseColumns = me.getBaseColumns(),
            moduleColumns = me.getModuleColumns();
        if (me.getIsGroupedHeader()) baseColumns = me.groupBaseColumns(baseColumns);
        if (columnOrder && columnOrder.length > 0 && (baseColumns || moduleColumns)) {
            columns = [];
            var length = columnOrder.length;
            for (var i = 0; i < length; i++) {
                var colName = columnOrder[i];
                //find the column in baseColumns or moduleColumns
                var resultColumn = baseColumns.filter(function (col) { return col.name === colName });
                if (!resultColumn||resultColumn.length===0) resultColumn = moduleColumns.filter(function (col) { return col.name === colName });
                if (!resultColumn||resultColumn.length===0) Ext.Error.raise(colName + ' does not belongs to baseColumns as well as in moduleColumns. Please verify column name exists.');
                else columns.push(resultColumn[0]);///TODO: check visible columns preferences and add column to columns list.
            }
        }
        return columns;
    },
    getBaseColumns:function() {
        var baseColumns = [
            {
                xtype: 'gridcolumn',
                dataIndex: 'amount',
                name: 'amount',
                text: app.localize('Amount').initCap(),
                filterField: {
                    xtype: 'numberfield',
                    emptyText: app.localize('ToolTipAmount')
                },editor: {
                    xtype:'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'jobId',///TODO: change to jobName once field is available
                name: 'jobId',
                text: app.localize('JobDivision'),
                width:'10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                },editor: {
                    xtype:'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountId',///TODO: change to combo
                name: 'accountId',
                text: app.localize('LineNumber').initCap(),
                width:'10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                },editor: {
                    xtype:'textfield'
                }
            },{
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId1',///TODO: change to combo
                name: 'subAccountId1',
                text: app.localize('SubAccount1').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                },editor: {
                    xtype:'textfield'
                }
            },{
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId2',///TODO: change to combo
                name: 'subAccountId2',
                text: app.localize('SubAccount2').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId3',///TODO: change to combo
                name: 'subAccountId3',
                text: app.localize('SubAccount3').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId4',///TODO: change to combo
                name: 'subAccountId4',
                text: app.localize('SubAccount4').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId5',///TODO: change to combo
                name: 'subAccountId5',
                text: app.localize('SubAccount5').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId6',///TODO: change to combo
                name: 'subAccountId6',
                text: app.localize('SubAccount6').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId7',///TODO: change to combo
                name: 'subAccountId7',
                text: app.localize('SubAccount7').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId8',///TODO: change to combo
                name: 'subAccountId8',
                text: app.localize('SubAccount8').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId9',///TODO: change to combo
                name: 'subAccountId9',
                text: app.localize('SubAccount9').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'subAccountId10',///TODO: change to combo
                name: 'subAccountId10',
                text: app.localize('SubAccount10').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'typeOf1099T4Id',///TODO: change to combo
                name: 'typeOf1099T4Id',
                text: app.localize('Ten99Code').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'itemMemo',
                name: 'itemMemo',
                text: app.localize('ItemMemo').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipItemMemo')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef1',
                name: 'accountRef1',
                text: app.localize('AccountRef1').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef1')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef2',
                name: 'accountRef2',
                text: app.localize('AccountRef2').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef2')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef3',
                name: 'accountRef3',
                text: app.localize('AccountRef3').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef3')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef4',
                name: 'accountRef4',
                text: app.localize('AccountRef4').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef4')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef5',
                name: 'accountRef5',
                text: app.localize('AccountRef5').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef5')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef6',
                name: 'accountRef6',
                text: app.localize('AccountRef6').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef6')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef7',
                name: 'accountRef7',
                text: app.localize('AccountRef7').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef7')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef8',
                name: 'accountRef8',
                text: app.localize('AccountRef8').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef8')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef9',
                name: 'accountRef9',
                text: app.localize('AccountRef9').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef9')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'accountRef10',
                name: 'accountRef10',
                text: app.localize('AccountRef10').initCap(),
                width: '9%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipAccountRef10')
                }, editor: {
                    xtype: 'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'ledgerReference',
                name: 'ledgerReference',
                text: app.localize('InvoiceRef').initCap(),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('ToolTipInvoiceRef')
                },editor: {
                    xtype:'textfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'isAsset',
                name: 'isAsset',
                text: app.localize('IsAsset').initCap(),
                sortable: false,
                groupable: false,
                renderer: Chaching.utilities.ChachingRenderers.rightWrongMarkRenderer,
                width: '7%',
                editor: {
                    xtype: 'checkboxfield'
                }
            }, {
                xtype: 'gridcolumn',
                dataIndex: 'taxRebateId',///TODO: change to combo
                name: 'taxRebateId',
                text: app.localize('TaxRebate'),
                width: '10%',
                filterField: {
                    xtype: 'textfield',
                    emptyText: app.localize('SearchText')
                },editor: {
                    xtype:'textfield'
                }
            }
        ];
        return baseColumns;
    },
    groupBaseColumns:function(baseColumns) {
        var me = this,
            groupedBaseColumns = [],
            groupHeaderConfig = me.getGroupedHeaderBaseConfig();
        if (groupHeaderConfig&&groupHeaderConfig.length>0) {
            var groupLength = groupHeaderConfig.length;
            for (var i = 0; i < groupLength; i++) {
                var group = groupHeaderConfig[i],
                    groupHeaderText = group.groupHeaderText,
                    childColumns = group.childColumnNames,
                    childWidths = group.childColumnWidths,
                    childColumnItems = [];
                if (childColumns && childColumns.length > 1) {
                    if (!childWidths && childWidths.length !== childColumns.length) {
                        Ext.Error.raise('Child column name length must be equals to child columns width length');
                        return false;
                    }
                    var childLength = childColumns.length;
                    for (var j = 0; j < childLength; j++) {
                        var cColName = childColumns[j];
                        var columnInBase = baseColumns.filter(function (o) { return o.name === cColName; });
                        if (!columnInBase||columnInBase.length===0) {
                            Ext.Error.raise(cColName + ' not exists in baseColumns. Please provide a valid name');
                            return false;
                        }
                        columnInBase[0].width = childWidths[j];
                        childColumnItems.push(columnInBase[0]);
                    }
                    var groupedCol = {
                        text: groupHeaderText,
                        name: group.columnName,
                        columns: childColumnItems
                    };
                    groupedBaseColumns.push(groupedCol);
                }
            }
        }
        if (groupedBaseColumns.length > 0) {
            for (var k = 0; k < baseColumns.length; k++) {
                groupedBaseColumns.push(baseColumns[k]);
            }
             return groupedBaseColumns;
        }
        return baseColumns;
    }
});