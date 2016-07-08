﻿
Ext.define('Chaching.view.administration.organization.OrganizationView', {
    extend: 'Chaching.view.common.window.ChachingWindowPanel',
    alias: ['widget.organizationUnits.createView', 'widget.organizationUnits.editView'],
    requires: [
        'Chaching.view.administration.organization.OrganizationViewController',
        'Chaching.view.administration.organization.OrganizationForm'
    ],

    controller: 'administration-organizationunits-organizationunitsview',
    height: 200,
    width: 450,
    layout: 'fit',
    initComponent: function (config) {

        var me = this,
            controller = me.getController();
        var form = Ext.create('Chaching.view.administration.organization.OrganizationForm', {
            height: '100%',
            width: '100%',
            name: 'Administration.OrganizationUnits'
        });
        me.items = [form];

        me.callParent(arguments);
    }
});