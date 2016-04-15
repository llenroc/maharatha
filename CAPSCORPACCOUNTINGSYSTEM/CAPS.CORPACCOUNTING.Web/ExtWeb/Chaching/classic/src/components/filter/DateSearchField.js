﻿/**
 * This file contains the custom datepicker control for search in grid.
 * Author: Krishna Garad
 * Date:04/12/2016
 */
Ext.define('Chaching.components.filter.DateSearchField', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.dateSearchField',
    uses: ['Ext.picker.Date', 'Ext.menu.DatePicker'],
    displayField: 'FilterValue',
    valueField:'FilterValue',
    initComponent: function () {
        var me = this;
        var gridStore = Ext.create('Ext.data.ArrayStore', {
            fields: [{ name: 'Before', type: 'date'
            }, {
                name: 'After', type: 'date'
            }, {
                name: 'On', type: 'date'
            }, { name: 'FilterValue', type: 'string' }, { name: 'ColumnIndex', type: 'int' }]
        });
        gridStore.add({ Before: '', After: '', On: '', FilterValue: '' });
        me.store = gridStore;
        me.callParent(arguments);
    },
    createPicker: function () {
        var me = this,
	        opts = Ext.apply({
	            shrinkWrapDock: 2,
	            manageHeight: false,
	            store: me.store,
	            displayField: me.displayField,
	            columns: me.getColumns(),
	            columnLines: true,
	            rowLines: true,
	            forceFit: true,
	            layout: 'fit',
	            floating: true,
	            multiSelect: true,
	            cls: 'chaching-grid',
	            selModel: {
	                selType: 'checkboxmodel',
	                showHeaderCheckbox:false,
                    listeners: {
                        beforeselect: me.onBeforeSelect,
                        select: me.onRecordSelect,
                        deselect:me.onRecordDeselect
                    }
	            },
                plugins:[
                {
                    ptype: 'cellediting',
                    pluginId: 'editingPluginSearch',
                    clicksToEdit: 1
                }],
	            viewConfig: {
	                stripeRows: true
	            },
                listeners: {
                    beforecellclick: me.onBeforeRowCellClick
                }

	        }, me.listConfig);

        var picker = me.picker = Ext.create('Ext.grid.Panel', opts);
        me.picker = picker;
        return picker;
    },
    onBeforeRowCellClick: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        record.set('ColumnIndex', cellIndex);
    },
    onRecordDeselect: function (selectionModel, record, index, eOpts) {
        var me = this,
           ownerCt = me.view.ownerCt;
        record.set('Before', '');
        record.set('After', '');
        record.set('On', '');
        record.set('FilterValue', '');
        ownerCt.ownerCmp.setValue(null);
        ownerCt.ownerCmp.collapse();
    },
    onRecordSelect: function (selectionModel, record, index, eOpts) {
        var me = this,
            ownerCt = me.view.ownerCt;
        //build expected filter
        var filterValue = undefined;
        var after = Ext.Date.format(record.get('After'), 'm/d/Y'),
            before = Ext.Date.format(record.get('Before'), 'm/d/Y'),
            on = Ext.Date.format(record.get('On'), 'm/d/Y');
        if (after && before) {
            filterValue = 'range ' + after + ',' + before;
        }
        else if (after) {
            filterValue = '>=' + after;
        } else if (before) {
            filterValue = '<=' + before;
        }else if (on) {
            filterValue = '=' + on;
        }

        if (filterValue) {
            record.set('FilterValue', filterValue);
            ownerCt.ownerCmp.setValue(filterValue);
            ownerCt.ownerCmp.collapse();
        }
    },
    onBeforeSelect:function(selectionModel, record, index, eOpts) {
        var allowSelect = false;
        //allow selection only when checkbox is clicked and filter fields has values
        if ((record.get('After') || record.get('Before') || record.get('On')) && record.get('ColumnIndex') === 0) {
            allowSelect = true;
        }
        return allowSelect;

    },
    getColumns:function() {
        var columns = [
            {
                xtype: 'gridcolumn',
                text: 'After',
                dataIndex: 'After',
                width: '30%',
                menuDisabled: true,
                sortable:false,
                renderer: Chaching.utilities.ChachingRenderers.dateSearchFieldRenderer,
                editor: {
                    xtype: 'datefield',
                    format:'m/d/Y'
                }
            },
            {
                xtype: 'gridcolumn',
                text: 'Before',
                dataIndex: 'Before',
                width: '30%',
                menuDisabled: true,
                sortable: false,
                renderer: Chaching.utilities.ChachingRenderers.dateSearchFieldRenderer,
                editor: {
                    xtype: 'datefield',
                    format: 'm/d/Y'
                }
            },
            {
                xtype: 'gridcolumn',
                text: 'On',
                dataIndex: 'On',
                width: '30%',
                menuDisabled: true,
                sortable: false,
                renderer: Chaching.utilities.ChachingRenderers.dateSearchFieldRenderer,
                editor: {
                    xtype: 'datefield',
                    format: 'm/d/Y'
                }
            }
        ];
        return columns;
    },
    alignPicker: function () {
        var me = this,
            picker;

        if (me.isExpanded) {
            picker = me.getPicker();
            if (me.matchFieldWidth) {

                picker.setWidth(me.bodyEl.getWidth());
            }
            if (picker.isFloating()) {
                me.doAlign();
            }
        }
    }
});