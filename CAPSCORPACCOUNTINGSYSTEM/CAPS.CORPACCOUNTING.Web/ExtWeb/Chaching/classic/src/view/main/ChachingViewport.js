
Ext.define('Chaching.view.main.ChachingViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Chaching.view.main.ChachingViewportController',
        'Chaching.view.main.ChachingViewportModel',
        'Chaching.view.header.ChachingHeader'
    ],

    controller: 'main-chachingviewport',
    viewModel: {
        type: 'main-chachingviewport'
    },

    layout: 'border',
    defaults: {
        bodyStyle: {
            'background-color': '#F3F5F9'
        }
    },
    //height: '100%',
    //width: '100%',
    alias: 'widget.chachingviewport',
    listeners: {
        render: 'onMainViewRender',
        resize: 'onViewportResize'
    },
    items: [
        {
            region: 'north',
            height: 70,
            items: [
                {
                    xtype: 'chachingheader',
                    height: 70
                }
            ]
        },
        {
            region: 'west',
            width: 250,
            split: false,
            reference: 'treelistContainer',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            bodyStyle: {
                'background-color': '#F3F5F9',
                'padding': '10px 20px 20px 20px'
            },
            border: false,
            scrollable: 'y',
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    micro: false,
                    ui: 'nav',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                }
            ]

        },
        {
            xtype: 'tabpanel',
            region: 'center',
            reference: 'mainCardPanel',
            itemId: 'contentPanel',
            stateId: 'mainCardPanelState',
            ui: 'dashboard',
            layout: {
                type: 'card',
                anchor: '100%'
            },
            listeners: {
                tabchange: 'onTabItemChange'
            },
            items: [
            {
                title: 'Dashboard',
                ui: 'dashboard',
                routeId: 'dashboard',
                iconCls: 'icon-home'
            }]
        }
    ]
});