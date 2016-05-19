Ext.data.JsonP.Ext_util_Cookies({"tagname":"class","name":"Ext.util.Cookies","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"Cookies.js","href":"Cookies.html#Ext-util-Cookies"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"clear","tagname":"method","owner":"Ext.util.Cookies","id":"method-clear","meta":{}},{"name":"get","tagname":"method","owner":"Ext.util.Cookies","id":"method-get","meta":{}},{"name":"set","tagname":"method","owner":"Ext.util.Cookies","id":"method-set","meta":{}}],"code_type":"ext_define","singleton":true,"id":"class-Ext.util.Cookies","short_doc":"Utility class for setting/reading values from browser cookies. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.util.Cookies</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Cookies.html#Ext-util-Cookies' target='_blank'>Cookies.js</a></div></pre><div class='doc-contents'><p>Utility class for setting/reading values from browser cookies.\nValues can be written using the <a href=\"#!/api/Ext.util.Cookies-method-set\" rel=\"Ext.util.Cookies-method-set\" class=\"docClass\">set</a> method.\nValues can be read using the <a href=\"#!/api/Ext.util.Cookies-method-get\" rel=\"Ext.util.Cookies-method-get\" class=\"docClass\">get</a> method.\nA cookie can be invalidated on the client machine using the <a href=\"#!/api/Ext.util.Cookies-method-clear\" rel=\"Ext.util.Cookies-method-clear\" class=\"docClass\">clear</a> method.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/Cookies.html#Ext-util-Cookies-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-clear' class='name expandable'>clear</a>( <span class='pre'>name, [path]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the p...</div><div class='long'><p>Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the past.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the cookie to remove</p>\n</div></li><li><span class='pre'>path</span> : String (optional)<div class='sub-desc'><p>The path for the cookie.\nThis must be included if you included a path while setting the cookie.</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/Cookies.html#Ext-util-Cookies-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves cookies that are accessible by the current page. ...</div><div class='long'><p>Retrieves cookies that are accessible by the current page. If a cookie does not exist, <code>get()</code> returns null. The\nfollowing example retrieves the cookie called \"valid\" and stores the String value in the variable validStatus.</p>\n\n<pre><code>var validStatus = <a href=\"#!/api/Ext.util.Cookies-method-get\" rel=\"Ext.util.Cookies-method-get\" class=\"docClass\">Ext.util.Cookies.get</a>(\"valid\");\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the cookie to get</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the cookie value for the specified name;\nnull if the cookie name does not exist.</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/Cookies.html#Ext-util-Cookies-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-set' class='name expandable'>set</a>( <span class='pre'>name, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a cookie with the specified name and value. ...</div><div class='long'><p>Creates a cookie with the specified name and value. Additional settings for the cookie may be optionally specified\n(for example: expiration, access restriction, SSL).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the cookie to set.</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to set for the cookie.</p>\n<ul><li><span class='pre'>expires</span> : Object (optional)<div class='sub-desc'><p>Specify an expiration date the cookie is to persist until. Note that the specified Date\nobject will be converted to Greenwich Mean Time (GMT).</p>\n</div></li><li><span class='pre'>path</span> : String (optional)<div class='sub-desc'><p>Setting a path on the cookie restricts access to pages that match that path. Defaults to all\npages ('/').</p>\n</div></li><li><span class='pre'>domain</span> : String (optional)<div class='sub-desc'><p>Setting a domain restricts access to pages on a given domain (typically used to allow\ncookie access across subdomains). For example, \"sencha.com\" will create a cookie that can be accessed from any\nsubdomain of sencha.com, including www.sencha.com, support.sencha.com, etc.</p>\n</div></li><li><span class='pre'>secure</span> : Boolean (optional)<div class='sub-desc'><p>Specify true to indicate that the cookie should only be accessible via SSL on a page\nusing the HTTPS protocol. Defaults to false. Note that this will only work if the page calling this code uses the\nHTTPS protocol, otherwise the cookie will be created with default options.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});