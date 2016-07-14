Ext.data.JsonP.Ext_grid_selection_Replicator({"tagname":"class","name":"Ext.grid.selection.Replicator","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Replicator.js","href":"Replicator.html#Ext-grid-selection-Replicator"}],"aliases":{"plugin":["selectionreplicator"]},"alternateClassNames":[],"extends":"Ext.plugin.Abstract","mixins":[],"requires":[],"uses":[],"members":[{"name":"columns","tagname":"property","owner":"Ext.grid.selection.Replicator","id":"property-columns","meta":{}},{"name":"destroy","tagname":"method","owner":"Ext.grid.selection.Replicator","id":"method-destroy","meta":{"private":true}},{"name":"getColumnValues","tagname":"method","owner":"Ext.grid.selection.Replicator","id":"method-getColumnValues","meta":{}},{"name":"onBeforeSelectionExtend","tagname":"method","owner":"Ext.grid.selection.Replicator","id":"method-onBeforeSelectionExtend","meta":{"private":true}},{"name":"replicateSelection","tagname":"method","owner":"Ext.grid.selection.Replicator","id":"method-replicateSelection","meta":{}}],"code_type":"ext_define","id":"class-Ext.grid.selection.Replicator","short_doc":"A plugin for use in grids which use the spreadsheet selection model,\nwith extensible configured as true or \"y\", meani...","component":false,"superclasses":["Ext.plugin.Abstract"],"subclasses":["Chaching.components.selection.ChachingReplicator"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.plugin.Abstract<div class='subclass '><strong>Ext.grid.selection.Replicator</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chaching.components.selection.ChachingReplicator' rel='Chaching.components.selection.ChachingReplicator' class='docClass'>Chaching.components.selection.ChachingReplicator</a></div><h4>Files</h4><div class='dependency'><a href='source/Replicator.html#Ext-grid-selection-Replicator' target='_blank'>Replicator.js</a></div></pre><div class='doc-contents'><p>A plugin for use in grids which use the <a href=\"#!/api/Ext.grid.selection.SpreadsheetModel\" rel=\"Ext.grid.selection.SpreadsheetModel\" class=\"docClass\">spreadsheet</a> selection model,\nwith <a href=\"#!/api/Ext.grid.selection.SpreadsheetModel-cfg-extensible\" rel=\"Ext.grid.selection.SpreadsheetModel-cfg-extensible\" class=\"docClass\">extensible</a> configured as <code>true</code> or <code>\"y\"</code>, meaning that\nthe selection may be extended up or down using a draggable extension handle.</p>\n\n<p>This plugin propagates values from the selection into the extension area.</p>\n\n<p>If just <em>one</em> row is selected, the values in that row are replicated unchanged into the extension area.</p>\n\n<p>If more than one row is selected, the two rows closest to the selected block are taken to provide a numeric\ndifference, and that difference is used to calculate the sequence of values all the way into the extension area.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-columns' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Replicator'>Ext.grid.selection.Replicator</span><br/><a href='source/Replicator.html#Ext-grid-selection-Replicator-property-columns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Replicator-property-columns' class='name expandable'>columns</a> : <a href=\"#!/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Ext.grid.column.Column</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>An array of the columns encompassed by the selection block. ...</div><div class='long'><p>An array of the columns encompassed by the selection block. This is gathered before <a href=\"#!/api/Ext.grid.selection.Replicator-method-replicateSelection\" rel=\"Ext.grid.selection.Replicator-method-replicateSelection\" class=\"docClass\">replicateSelection</a>\nis called, so is available to subclasses which implement their own <a href=\"#!/api/Ext.grid.selection.Replicator-method-replicateSelection\" rel=\"Ext.grid.selection.Replicator-method-replicateSelection\" class=\"docClass\">replicateSelection</a> method.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Replicator'>Ext.grid.selection.Replicator</span><br/><a href='source/Replicator.html#Ext-grid-selection-Replicator-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Replicator-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getColumnValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Replicator'>Ext.grid.selection.Replicator</span><br/><a href='source/Replicator.html#Ext-grid-selection-Replicator-method-getColumnValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Replicator-method-getColumnValues' class='name expandable'>getColumnValues</a>( <span class='pre'>record</span> ) : Mixed[]<span class=\"signature\"></span></div><div class='description'><div class='short'>A utility method, which, when passed a record, uses the columns property to extract the values\nof that record which a...</div><div class='long'><p>A utility method, which, when passed a record, uses the <a href=\"#!/api/Ext.grid.selection.Replicator-property-columns\" rel=\"Ext.grid.selection.Replicator-property-columns\" class=\"docClass\">columns</a> property to extract the values\nof that record which are encompassed by the selection.</p>\n\n<p>Note that columns with no <a href=\"#!/api/Ext.grid.column.Column-cfg-dataIndex\" rel=\"Ext.grid.column.Column-cfg-dataIndex\" class=\"docClass\">dataIndex</a> cannot yield a value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>The record from which to read values.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed[]</span><div class='sub-desc'><p>The values of the fields used by the selected column range for the passed record.</p>\n</div></li></ul></div></div></div><div id='method-onBeforeSelectionExtend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Replicator'>Ext.grid.selection.Replicator</span><br/><a href='source/Replicator.html#Ext-grid-selection-Replicator-method-onBeforeSelectionExtend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Replicator-method-onBeforeSelectionExtend' class='name expandable'>onBeforeSelectionExtend</a>( <span class='pre'>ownerGrid, sel, extension</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerGrid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>sel</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>extension</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-replicateSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Replicator'>Ext.grid.selection.Replicator</span><br/><a href='source/Replicator.html#Ext-grid-selection-Replicator-method-replicateSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Replicator-method-replicateSelection' class='name expandable'>replicateSelection</a>( <span class='pre'>ownerGrid, sel, extension</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This is the method which is called when the spreadsheet selection model's\nextender handle is dragged and released. ...</div><div class='long'><p>This is the method which is called when the <a href=\"#!/api/Ext.grid.selection.SpreadsheetModel\" rel=\"Ext.grid.selection.SpreadsheetModel\" class=\"docClass\">spreadsheet</a> selection model's\nextender handle is dragged and released.</p>\n\n<p>It is passed contextual information about the selection and the extension area.</p>\n\n<p>Subclass authors may override it to gain access to the event and perform their own data replication.</p>\n\n<p>By default, the selection is extended to encompass the selection area. Returning <code>false</code> from this method\nvetoes that.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerGrid</span> : <a href=\"#!/api/Ext.panel.Table\" rel=\"Ext.panel.Table\" class=\"docClass\">Ext.panel.Table</a><div class='sub-desc'><p>The owning grid.</p>\n</div></li><li><span class='pre'>sel</span> : <a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a><div class='sub-desc'><p>An object describing the contiguous selected area.</p>\n</div></li><li><span class='pre'>extension</span> : Object<div class='sub-desc'><p>An object describing the type and size of extension.</p>\n<ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p><code>\"rows\"</code> or <code>\"columns\"</code></p>\n</div></li><li><span class='pre'>start</span> : <a href=\"#!/api/Ext.grid.CellContext\" rel=\"Ext.grid.CellContext\" class=\"docClass\">Ext.grid.CellContext</a><div class='sub-desc'><p>The start (top left) cell of the extension area.</p>\n</div></li><li><span class='pre'>end</span> : <a href=\"#!/api/Ext.grid.CellContext\" rel=\"Ext.grid.CellContext\" class=\"docClass\">Ext.grid.CellContext</a><div class='sub-desc'><p>The end (bottom right) cell of the extension area.</p>\n</div></li><li><span class='pre'>columns</span> : number (optional)<div class='sub-desc'><p>The number of columns extended (-ve means on the left side).</p>\n</div></li><li><span class='pre'>rows</span> : number (optional)<div class='sub-desc'><p>The number of rows extended (-ve means on the top side).</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});