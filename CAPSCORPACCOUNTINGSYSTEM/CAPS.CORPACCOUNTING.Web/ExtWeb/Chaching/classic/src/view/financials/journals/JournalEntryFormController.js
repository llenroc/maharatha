Ext.define('Chaching.view.financials.journals.JournalEntryFormController', {
    extend: 'Chaching.view.common.form.ChachingTransactionFormPanelController',
    alias: 'controller.financials-journals-journalentryform',
    doPreSaveOperation: function(record, values, idPropertyField) {
        record.set('typeOfAccountingDocumentId', 1);
        return record;
    },
    onHeaderCollapse:function(fieldSet, eOpts) {
        var me = this,
            view = me.getView(),
            detailContainer = view.down('fieldset[isTransactionDetailContainer=true]');
        if (detailContainer) {
            var detailGrid = detailContainer.down('gridpanel');
            if (detailGrid) {
                var gridHeight = detailGrid.getHeight();
                detailGrid.originalHeight = gridHeight;
                detailGrid.setHeight(gridHeight + (fieldSet.getHeight() - 80));
            }
        }
    },
    onHeaderExpand:function(fieldSet, eOpts) {
        var me = this,
           view = me.getView(),
           detailContainer = view.down('fieldset[isTransactionDetailContainer=true]');
        if (detailContainer) {
            var detailGrid = detailContainer.down('gridpanel');
            if (detailGrid) {
                detailGrid.setHeight(detailGrid.originalHeight);
            }
        }
    },
    validateDetails: function (controller, view, detailGrid, detailsStore) {
        var detailColumns = detailGrid.getColumns(),
            modifiedRecords = detailsStore.getModifiedRecords(),
            isValid = true,
            debitDataIndexes = ['jobDesc', 'accountDesc', 'subAccount1', 'subAccount2', 'subAccount3', 'subAccount4', 'subAccount5', 'subAccount6', 'subAccount7', 'subAccount8', 'subAccount9', 'subAccount10'],
            creditDataIndexes = ['creditJobDesc', 'creditAccountDesc', 'creditSubAccount1', 'creditSubAccount2', 'creditSubAccount3', 'creditSubAccount4', 'creditSubAccount5', 'creditSubAccount6', 'creditSubAccount7', 'creditSubAccount8', 'creditSubAccount9', 'creditSubAccount10'];
        if (modifiedRecords && modifiedRecords.length > 0) {
            var rowLength = modifiedRecords.length;
            for (var i = 0; i < rowLength; i++) {
                var record = modifiedRecords[i],
                    columnCount = detailColumns.length;
                if (record.dirty) {
                    for (var j = 0; j < columnCount; j++) {
                        var column = detailColumns[j],
                        dataIndex = column.dataIndex;
                        if (!dataIndex) dataIndex = column.name;
                        if (column.isMandatory) {
                            var columnValue = record.get(dataIndex);
                            var isValidRec = true;
                            if (debitDataIndexes.indexOf(dataIndex) !== -1) {
                                isValidRec = controller.validateRecord(dataIndex, debitDataIndexes, record, columnValue);
                            }else if (creditDataIndexes.indexOf(dataIndex)!==-1) {
                                isValidRec = controller.validateRecord(dataIndex, creditDataIndexes, record, columnValue);
                            }
                            if (dataIndex === "amount" && columnValue === 0) {
                                isValidRec = false;
                                columnValue = null;
                            }
                            if (columnValue === null || columnValue === undefined || columnValue === "") {
                                if (!isValidRec) {
                                    var cell = detailGrid.getView().getCell(record, column);
                                    if (cell) controller.invalidateCell(cell, column.text);
                                    isValid = false;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (!isValid) break;
            }
            return isValid;
        } else return true;
    },
    validateRecord: function (dataIndex, dataIndexes, record,columnValue) {
        var isValid = true, value = undefined;
        for (var i = 0; i < dataIndexes.length; i++) {
            if (dataIndexes[i] !== dataIndex) {
                value = record.get(dataIndexes[i]);
                if (value && (columnValue === null || columnValue === undefined || columnValue === "")) {
                    isValid = false;
                    break;
                } else isValid = true;
            }
        }
        return isValid;
    }
    
});
