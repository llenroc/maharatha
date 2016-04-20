Ext.define('Chaching.view.languages.LanguagesGridController', {
    extend: 'Chaching.view.common.grid.ChachingGridPanelController',
    alias: 'controller.languages-languagesgrid',    
    changeLanguageClick: function (menu, formView, isEdit) {        
        var parentMenu = menu.parentMenu,
           widgetRec = parentMenu.widgetRecord,         
            data=widgetRec.data,
        
        changepasswordAction = Ext.create('Chaching.view.languages.LanguagesView');
            var form = changepasswordAction.down('form').getForm();
            form.findField('baseLanguage').setValue('en');
            form.findField('source').setValue('CORPACCOUNTING');
            form.findField('targetValue').setValue('All');
            form.findField('targetLanguage').setValue(data.name);
        changepasswordAction.show();
    },

});
