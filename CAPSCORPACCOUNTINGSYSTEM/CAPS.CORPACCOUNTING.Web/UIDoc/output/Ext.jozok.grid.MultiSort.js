Ext.data.JsonP.Ext_jozok_grid_MultiSort({"tagname":"class","name":"Ext.jozok.grid.MultiSort","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MultiSort.js","href":"MultiSort.html#Ext-jozok-grid-MultiSort"}],"author":[{"tagname":"author","name":"Jozef Kejst","email":null}],"aliases":{"feature":["ux-gmsrt","jozok-gmsrt"]},"alternateClassNames":["Ext.ux.grid.MultiSort"],"extends":"Ext.grid.feature.Feature","mixins":[],"requires":[],"uses":[],"members":[{"name":"displaySortOrder","tagname":"cfg","owner":"Ext.jozok.grid.MultiSort","id":"cfg-displaySortOrder","meta":{}},{"name":"removeSortText","tagname":"cfg","owner":"Ext.jozok.grid.MultiSort","id":"cfg-removeSortText","meta":{}},{"name":"sortersCount","tagname":"cfg","owner":"Ext.jozok.grid.MultiSort","id":"cfg-sortersCount","meta":{}},{"name":"disabled","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-disabled","meta":{}},{"name":"eventPrefix","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-eventPrefix","meta":{}},{"name":"eventSelector","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-eventSelector","meta":{}},{"name":"grid","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-grid","meta":{}},{"name":"hasFeatureEvent","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-hasFeatureEvent","meta":{}},{"name":"isFeature","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-isFeature","meta":{}},{"name":"view","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-view","meta":{}},{"name":"wrapsItem","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-wrapsItem","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-constructor","meta":{}},{"name":"afterViewRender","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-afterViewRender","meta":{}},{"name":"clone","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-clone","meta":{"private":true}},{"name":"disable","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-disable","meta":{}},{"name":"enable","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-enable","meta":{}},{"name":"getFireEventArgs","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-getFireEventArgs","meta":{"template":true}},{"name":"getMenuItems","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-getMenuItems","meta":{}},{"name":"getSortersCount","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-getSortersCount","meta":{}},{"name":"init","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-init","meta":{}},{"name":"injectMultiSortMenu","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-injectMultiSortMenu","meta":{}},{"name":"onHeaderClick","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-onHeaderClick","meta":{}},{"name":"onRemoveSortClick","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-onRemoveSortClick","meta":{}},{"name":"onSortAscClick","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-onSortAscClick","meta":{}},{"name":"onSortClick","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-onSortClick","meta":{}},{"name":"onSortDescClick","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-onSortDescClick","meta":{}},{"name":"removeOldSorterLabels","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-removeOldSorterLabels","meta":{}},{"name":"setSortState","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-setSortState","meta":{"private":true}},{"name":"setSortersCount","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-setSortersCount","meta":{}},{"name":"sortLocalSortingStore","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-sortLocalSortingStore","meta":{}},{"name":"updateSorteredColumns","tagname":"method","owner":"Ext.jozok.grid.MultiSort","id":"method-updateSorteredColumns","meta":{}},{"name":"vetoEvent","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-vetoEvent","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.jozok.grid.MultiSort","short_doc":"Grid MultiSort Feature by Jozok\n\n@date 24.2.2015\n@copyright (c) 2014, Jozef Kejst\n@license This file is proprietary a...","component":false,"superclasses":["Ext.util.Observable","Ext.grid.feature.Feature"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.ux.grid.MultiSort</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.util.Observable<div class='subclass '><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='docClass'>Ext.grid.feature.Feature</a><div class='subclass '><strong>Ext.jozok.grid.MultiSort</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort' target='_blank'>MultiSort.js</a></div></pre><div class='doc-contents'><h1>Grid MultiSort Feature by Jozok</h1>\n\n<p>@date 24.2.2015\n@copyright (c) 2014, Jozef Kejst\n@license This file is proprietary and it is only\nmeant to be run as a part of Sencha Examples application.\nAll other uses (reading, copying, reverse engineering\nto name a few) are prohibited.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-displaySortOrder' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-cfg-displaySortOrder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-cfg-displaySortOrder' class='name expandable'>displaySortOrder</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>flag to display counters in column header for sorting order ...</div><div class='long'><p>flag to display counters in column header for sorting order</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-removeSortText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-cfg-removeSortText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-cfg-removeSortText' class='name expandable'>removeSortText</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;Remove from Sort&quot;</code></p></div></div></div><div id='cfg-sortersCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-cfg-sortersCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-cfg-sortersCount' class='name expandable'>sortersCount</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>sortersCount\ntotal count of sortered columns ...</div><div class='long'><p>sortersCount\ntotal count of sortered columns</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disabled' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-disabled' class='name expandable'>disabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True when feature is disabled. ...</div><div class='long'><p>True when feature is disabled.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-eventPrefix' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-eventPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-eventPrefix' class='name expandable'>eventPrefix</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Prefix to use when firing events on the view. ...</div><div class='long'><p>Prefix to use when firing events on the view.\nFor example a prefix of group would expose \"groupclick\", \"groupcontextmenu\", \"groupdblclick\".</p>\n</div></div></div><div id='property-eventSelector' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-eventSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-eventSelector' class='name expandable'>eventSelector</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Selector used to determine when to fire the event with the eventPrefix.</p>\n</div><div class='long'><p>Selector used to determine when to fire the event with the eventPrefix.</p>\n</div></div></div><div id='property-grid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-grid' class='name expandable'>grid</a> : <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the grid panel</p>\n</div><div class='long'><p>Reference to the grid panel</p>\n</div></div></div><div id='property-hasFeatureEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-hasFeatureEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-hasFeatureEvent' class='name expandable'>hasFeatureEvent</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Most features will expose additional events, some may not and will\nneed to change this to false. ...</div><div class='long'><p>Most features will expose additional events, some may not and will\nneed to change this to false.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-isFeature' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-isFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-isFeature' class='name expandable'>isFeature</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true in this class to identify an object as an instantiated Feature, or subclass thereof. ...</div><div class='long'><p><code>true</code> in this class to identify an object as an instantiated Feature, or subclass thereof.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-view' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-view' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-view' class='name expandable'>view</a> : <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.view.Table</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the TableView.</p>\n</div><div class='long'><p>Reference to the TableView.</p>\n</div></div></div><div id='property-wrapsItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-wrapsItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-wrapsItem' class='name expandable'>wrapsItem</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.feature.Feature-method-constructor' class='name expandable'>Ext.jozok.grid.MultiSort</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.feature.Feature\" rel=\"Ext.grid.feature.Feature\" class=\"docClass\">Ext.grid.feature.Feature</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.feature.Feature\" rel=\"Ext.grid.feature.Feature\" class=\"docClass\">Ext.grid.feature.Feature</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterViewRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-afterViewRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-afterViewRender' class='name expandable'>afterViewRender</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function afterViewRender\nchange sorting grid panel submenu and add new for remove column from sorting\nupdate sortered...</div><div class='long'><p>function afterViewRender\nchange sorting grid panel submenu and add new for remove column from sorting\nupdate sortered columns in grid (depend on stateful grid property)</p>\n</div></div></div><div id='method-clone' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-disable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disables the feature. ...</div><div class='long'><p>Disables the feature.</p>\n</div></div></div><div id='method-enable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Enables the feature. ...</div><div class='long'><p>Enables the feature.</p>\n</div></div></div><div id='method-getFireEventArgs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-getFireEventArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-getFireEventArgs' class='name expandable'>getFireEventArgs</a>( <span class='pre'>eventName, view, featureTarget, e</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Abstract method to be overriden when a feature should add additional\narguments to its event signature. ...</div><div class='long'><p>Abstract method to be overriden when a feature should add additional\narguments to its event signature. By default the event will fire:</p>\n\n<ul>\n<li>view - The underlying <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.view.Table</a></li>\n<li>featureTarget - The matched element by the defined <a href=\"#!/api/Ext.grid.feature.Feature-property-eventSelector\" rel=\"Ext.grid.feature.Feature-property-eventSelector\" class=\"docClass\">eventSelector</a></li>\n</ul>\n\n\n<p>The method must also return the eventName as the first index of the array\nto be passed to fireEvent.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>featureTarget</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getMenuItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-getMenuItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-getMenuItems' class='name expandable'>getMenuItems</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function getMenuItems\nupdate exisiting grid column menu with new functionality ...</div><div class='long'><p>function getMenuItems\nupdate exisiting grid column menu with new functionality</p>\n</div></div></div><div id='method-getSortersCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-cfg-sortersCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-getSortersCount' class='name expandable'>getSortersCount</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of sortersCount. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.jozok.grid.MultiSort-cfg-sortersCount\" rel=\"Ext.jozok.grid.MultiSort-cfg-sortersCount\" class=\"docClass\">sortersCount</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-init' class='name expandable'>init</a>( <span class='pre'>grid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function init\nAttach events to view and view header container ...</div><div class='long'><p>function init\nAttach events to view and view header container</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.grid.feature.Feature-method-init\" rel=\"Ext.grid.feature.Feature-method-init\" class=\"docClass\">Ext.grid.feature.Feature.init</a></p></div></div></div><div id='method-injectMultiSortMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-injectMultiSortMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-injectMultiSortMenu' class='name expandable'>injectMultiSortMenu</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function injectMultiSortMenu ...</div><div class='long'><p>function injectMultiSortMenu</p>\n</div></div></div><div id='method-onHeaderClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-onHeaderClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-onHeaderClick' class='name expandable'>onHeaderClick</a>( <span class='pre'>ct, column, e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function onHeaderClick\nlistener for grid header click event ...</div><div class='long'><p>function onHeaderClick\nlistener for grid header click event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>column</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onRemoveSortClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-onRemoveSortClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-onRemoveSortClick' class='name expandable'>onRemoveSortClick</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function onRemoveSortClick\nremove one column form sorting ...</div><div class='long'><p>function onRemoveSortClick\nremove one column form sorting</p>\n</div></div></div><div id='method-onSortAscClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-onSortAscClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-onSortAscClick' class='name expandable'>onSortAscClick</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function onSortAscClick\nlisteners for sort submenu ...</div><div class='long'><p>function onSortAscClick\nlisteners for sort submenu</p>\n</div></div></div><div id='method-onSortClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-onSortClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-onSortClick' class='name expandable'>onSortClick</a>( <span class='pre'>bool</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function onSortClick\nadd new column to sorting ...</div><div class='long'><p>function onSortClick\nadd new column to sorting</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bool</span> : Object<div class='sub-desc'><p>direction</p>\n</div></li></ul></div></div></div><div id='method-onSortDescClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-onSortDescClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-onSortDescClick' class='name expandable'>onSortDescClick</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function onSortDescClick\nlistener for sort submenu ...</div><div class='long'><p>function onSortDescClick\nlistener for sort submenu</p>\n</div></div></div><div id='method-removeOldSorterLabels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-removeOldSorterLabels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-removeOldSorterLabels' class='name expandable'>removeOldSorterLabels</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function removeOldSorterlabels ...</div><div class='long'><p>function removeOldSorterlabels</p>\n</div></div></div><div id='method-setSortState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-setSortState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-setSortState' class='name expandable'>setSortState</a>( <span class='pre'>column, sorter</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>eo function onSortDescClick ...</div><div class='long'><p>eo function onSortDescClick</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>sorter</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setSortersCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-cfg-sortersCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-setSortersCount' class='name expandable'>setSortersCount</a>( <span class='pre'>sortersCount</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of sortersCount. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.jozok.grid.MultiSort-cfg-sortersCount\" rel=\"Ext.jozok.grid.MultiSort-cfg-sortersCount\" class=\"docClass\">sortersCount</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sortersCount</span> : Number<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-sortLocalSortingStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-sortLocalSortingStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-sortLocalSortingStore' class='name expandable'>sortLocalSortingStore</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function sortLocalSortingStore ...</div><div class='long'><p>function sortLocalSortingStore</p>\n</div></div></div><div id='method-updateSorteredColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.jozok.grid.MultiSort'>Ext.jozok.grid.MultiSort</span><br/><a href='source/MultiSort.html#Ext-jozok-grid-MultiSort-method-updateSorteredColumns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.jozok.grid.MultiSort-method-updateSorteredColumns' class='name expandable'>updateSorteredColumns</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>function updateSorteredColumns\nfunction to update counter labels and enable/disable remove sort submenu for sortered ...</div><div class='long'><p>function updateSorteredColumns\nfunction to update counter labels and enable/disable remove sort submenu for sortered columns</p>\n</div></div></div><div id='method-vetoEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-vetoEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-vetoEvent' class='name expandable'>vetoEvent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});