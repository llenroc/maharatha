
Ext.define('Chaching.view.roles.RolesView',{
    extend: 'Chaching.view.common.window.ChachingWindowPanel',
    alias: ['widget.roles.createView', 'widget.roles.editView'],
    requires: [
        'Chaching.view.roles.RolesViewController',       
        'Chaching.view.roles.RolesForm'
    ],
    controller: 'roles-rolesview',    
    height: 500,
    width: 450,
    layout: 'fit',
    title: app.localize("Editrole"),
    defaultFocus: 'roleName',
    initComponent: function (config) {       
        var me = this,
            controller = me.getController();
        var form = Ext.create('Chaching.view.roles.RolesForm', {
            height: '100%',
            width: '100%',
            name: 'Roles'
        });
        me.items = [form];
        me.callParent(arguments);
    }
});