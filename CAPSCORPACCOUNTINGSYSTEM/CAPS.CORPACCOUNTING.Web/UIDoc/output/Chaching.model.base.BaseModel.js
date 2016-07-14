Ext.data.JsonP.Chaching_model_base_BaseModel({"tagname":"class","name":"Chaching.model.base.BaseModel","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"BaseModel.js","href":"BaseModel.html#Chaching-model-base-BaseModel"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Model","mixins":[],"requires":[],"uses":[],"members":[{"name":"searchEntityName","tagname":"cfg","owner":"Chaching.model.base.BaseModel","id":"cfg-searchEntityName","meta":{"private":true}},{"name":"fields","tagname":"property","owner":"Chaching.model.base.BaseModel","id":"property-fields","meta":{"private":true}},{"name":"schema","tagname":"property","owner":"Chaching.model.base.BaseModel","id":"property-schema","meta":{"private":true}},{"name":"getSearchEntityName","tagname":"method","owner":"Chaching.model.base.BaseModel","id":"method-getSearchEntityName","meta":{}},{"name":"setSearchEntityName","tagname":"method","owner":"Chaching.model.base.BaseModel","id":"method-setSearchEntityName","meta":{}}],"code_type":"ext_define","id":"class-Chaching.model.base.BaseModel","short_doc":"A Base Model or Entity represents some object that your application manages. ...","component":false,"superclasses":["Ext.data.Model"],"subclasses":["Chaching.model.Jobcasting.JobLocationsModel","Chaching.model.address.AddressModel","Chaching.model.administration.organization.CompanyModel","Chaching.model.administration.organization.CompanySettingsModel","Chaching.model.administration.organization.OrganizationModel","Chaching.model.auditlogs.AuditLogsModel","Chaching.model.banking.banksetup.BankCheckRangesModel","Chaching.model.banking.banksetup.BankSetupModel","Chaching.model.base.TransactionDetailsModel","Chaching.model.base.TransactionHeaderModel","Chaching.model.batchposting.batches.BatchesModel","Chaching.model.customers.CustomersModel","Chaching.model.editions.EditionsModel","Chaching.model.employee.EmployeeModel","Chaching.model.financials.accounts.AccountRestrictionsModel","Chaching.model.financials.accounts.AccountsModel","Chaching.model.financials.accounts.ChartOfAccountsModel","Chaching.model.financials.accounts.DivisionsModel","Chaching.model.financials.accounts.SubAccountsModel","Chaching.model.financials.fiscalperiod.FiscalPeriodModel","Chaching.model.financials.fiscalperiod.FiscalYearModel","Chaching.model.manageView.ManageViewModel","Chaching.model.payables.vendors.VendorAliasModel","Chaching.model.payables.vendors.VendorsModel","Chaching.model.profile.linkedaccounts.LinkedAccountsModel","Chaching.model.profile.loginAttempts.LoginAttemptModel","Chaching.model.projects.projectmaintenance.JobAccountsModel","Chaching.model.projects.projectmaintenance.PoRangeAllocationModel","Chaching.model.projects.projectmaintenance.ProjectModel","Chaching.model.receivables.customers.CustomersModel","Chaching.model.roles.RoleEditModel","Chaching.model.roles.RolePermissionsModel","Chaching.model.roles.RolesModel","Chaching.model.tenants.TenantUserModel","Chaching.model.tenants.TenantsModel","Chaching.model.users.UsersModel"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><strong>Chaching.model.base.BaseModel</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chaching.model.Jobcasting.JobLocationsModel' rel='Chaching.model.Jobcasting.JobLocationsModel' class='docClass'>Chaching.model.Jobcasting.JobLocationsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.address.AddressModel' rel='Chaching.model.address.AddressModel' class='docClass'>Chaching.model.address.AddressModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.administration.organization.CompanyModel' rel='Chaching.model.administration.organization.CompanyModel' class='docClass'>Chaching.model.administration.organization.CompanyModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.administration.organization.CompanySettingsModel' rel='Chaching.model.administration.organization.CompanySettingsModel' class='docClass'>Chaching.model.administration.organization.CompanySettingsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.administration.organization.OrganizationModel' rel='Chaching.model.administration.organization.OrganizationModel' class='docClass'>Chaching.model.administration.organization.OrganizationModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.auditlogs.AuditLogsModel' rel='Chaching.model.auditlogs.AuditLogsModel' class='docClass'>Chaching.model.auditlogs.AuditLogsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.banking.banksetup.BankCheckRangesModel' rel='Chaching.model.banking.banksetup.BankCheckRangesModel' class='docClass'>Chaching.model.banking.banksetup.BankCheckRangesModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.banking.banksetup.BankSetupModel' rel='Chaching.model.banking.banksetup.BankSetupModel' class='docClass'>Chaching.model.banking.banksetup.BankSetupModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.base.TransactionDetailsModel' rel='Chaching.model.base.TransactionDetailsModel' class='docClass'>Chaching.model.base.TransactionDetailsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.base.TransactionHeaderModel' rel='Chaching.model.base.TransactionHeaderModel' class='docClass'>Chaching.model.base.TransactionHeaderModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.batchposting.batches.BatchesModel' rel='Chaching.model.batchposting.batches.BatchesModel' class='docClass'>Chaching.model.batchposting.batches.BatchesModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.customers.CustomersModel' rel='Chaching.model.customers.CustomersModel' class='docClass'>Chaching.model.customers.CustomersModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.editions.EditionsModel' rel='Chaching.model.editions.EditionsModel' class='docClass'>Chaching.model.editions.EditionsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.employee.EmployeeModel' rel='Chaching.model.employee.EmployeeModel' class='docClass'>Chaching.model.employee.EmployeeModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.financials.accounts.AccountRestrictionsModel' rel='Chaching.model.financials.accounts.AccountRestrictionsModel' class='docClass'>Chaching.model.financials.accounts.AccountRestrictionsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.financials.accounts.AccountsModel' rel='Chaching.model.financials.accounts.AccountsModel' class='docClass'>Chaching.model.financials.accounts.AccountsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.financials.accounts.ChartOfAccountsModel' rel='Chaching.model.financials.accounts.ChartOfAccountsModel' class='docClass'>Chaching.model.financials.accounts.ChartOfAccountsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.financials.accounts.DivisionsModel' rel='Chaching.model.financials.accounts.DivisionsModel' class='docClass'>Chaching.model.financials.accounts.DivisionsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.financials.accounts.SubAccountsModel' rel='Chaching.model.financials.accounts.SubAccountsModel' class='docClass'>Chaching.model.financials.accounts.SubAccountsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.financials.fiscalperiod.FiscalPeriodModel' rel='Chaching.model.financials.fiscalperiod.FiscalPeriodModel' class='docClass'>Chaching.model.financials.fiscalperiod.FiscalPeriodModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.financials.fiscalperiod.FiscalYearModel' rel='Chaching.model.financials.fiscalperiod.FiscalYearModel' class='docClass'>Chaching.model.financials.fiscalperiod.FiscalYearModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.manageView.ManageViewModel' rel='Chaching.model.manageView.ManageViewModel' class='docClass'>Chaching.model.manageView.ManageViewModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.payables.vendors.VendorAliasModel' rel='Chaching.model.payables.vendors.VendorAliasModel' class='docClass'>Chaching.model.payables.vendors.VendorAliasModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.payables.vendors.VendorsModel' rel='Chaching.model.payables.vendors.VendorsModel' class='docClass'>Chaching.model.payables.vendors.VendorsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.profile.linkedaccounts.LinkedAccountsModel' rel='Chaching.model.profile.linkedaccounts.LinkedAccountsModel' class='docClass'>Chaching.model.profile.linkedaccounts.LinkedAccountsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.profile.loginAttempts.LoginAttemptModel' rel='Chaching.model.profile.loginAttempts.LoginAttemptModel' class='docClass'>Chaching.model.profile.loginAttempts.LoginAttemptModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.projects.projectmaintenance.JobAccountsModel' rel='Chaching.model.projects.projectmaintenance.JobAccountsModel' class='docClass'>Chaching.model.projects.projectmaintenance.JobAccountsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.projects.projectmaintenance.PoRangeAllocationModel' rel='Chaching.model.projects.projectmaintenance.PoRangeAllocationModel' class='docClass'>Chaching.model.projects.projectmaintenance.PoRangeAllocationModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.projects.projectmaintenance.ProjectModel' rel='Chaching.model.projects.projectmaintenance.ProjectModel' class='docClass'>Chaching.model.projects.projectmaintenance.ProjectModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.receivables.customers.CustomersModel' rel='Chaching.model.receivables.customers.CustomersModel' class='docClass'>Chaching.model.receivables.customers.CustomersModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.roles.RoleEditModel' rel='Chaching.model.roles.RoleEditModel' class='docClass'>Chaching.model.roles.RoleEditModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.roles.RolePermissionsModel' rel='Chaching.model.roles.RolePermissionsModel' class='docClass'>Chaching.model.roles.RolePermissionsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.roles.RolesModel' rel='Chaching.model.roles.RolesModel' class='docClass'>Chaching.model.roles.RolesModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.tenants.TenantUserModel' rel='Chaching.model.tenants.TenantUserModel' class='docClass'>Chaching.model.tenants.TenantUserModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.tenants.TenantsModel' rel='Chaching.model.tenants.TenantsModel' class='docClass'>Chaching.model.tenants.TenantsModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.users.UsersModel' rel='Chaching.model.users.UsersModel' class='docClass'>Chaching.model.users.UsersModel</a></div><h4>Files</h4><div class='dependency'><a href='source/BaseModel.html#Chaching-model-base-BaseModel' target='_blank'>BaseModel.js</a></div></pre><div class='doc-contents'><p>A Base Model or Entity represents some object that your application manages. For example, one\nmight define a Model for Users, Products, Cars, or other real-world object that we want\nto model in the system. Models are used by stores, which are in\nturn used by many of the data-bound components in Ext.</p>\n\n<h1>Fields</h1>\n\n<p>Models are defined as a set of fields and any arbitrary methods and properties relevant\nto the model. For example:</p>\n\n<pre><code>Ext.define('User', {\n    extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n    fields: [\n        {name: 'name',  type: 'string'},\n        {name: 'age',   type: 'int', convert: null},\n        {name: 'phone', type: 'string'},\n        {name: 'alive', type: 'boolean', defaultValue: true, convert: null}\n    ],\n\n    changeName: function() {\n        var oldName = this.get('name'),\n            newName = oldName + \" The Barbarian\";\n\n        this.set('name', newName);\n    }\n});\n</code></pre>\n\n<p>Now we can create instances of our User model and call any model logic we defined:</p>\n\n<pre><code>var user = Ext.create('User', {\n    id   : 'ABCD12345',\n    name : 'Conan',\n    age  : 24,\n    phone: '555-555-5555'\n});\n\nuser.changeName();\nuser.get('name'); //returns \"Conan The Barbarian\"\n</code></pre>\n\n<p>By default, the built in field types such as number and boolean coerce string values\nin the raw data by virtue of their Ext.data.field.Field.convert method.\nWhen the server can be relied upon to send data in a format that does not need to be\nconverted, disabling this can improve performance. The Json\nand Array readers are likely candidates for this\noptimization. To disable field conversions you simply specify <code>null</code> for the field's\nconvert config.</p>\n\n<h2>The \"id\" Field and <code>idProperty</code></h2>\n\n<p>A Model definition always has an <em>identifying field</em> which should yield a unique key\nfor each instance. By default, a field named \"id\" will be created with a\nmapping of \"id\". This happens because of the default\nidProperty provided in Model definitions.</p>\n\n<p>To alter which field is the identifying field, use the idProperty config.</p>\n\n<h1>Validators</h1>\n\n<p>Models have built-in support for field validators. Validators are added to models as in\nthe follow example:</p>\n\n<pre><code>Ext.define('User', {\n    extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n    fields: [\n        { name: 'name',     type: 'string' },\n        { name: 'age',      type: 'int' },\n        { name: 'phone',    type: 'string' },\n        { name: 'gender',   type: 'string' },\n        { name: 'username', type: 'string' },\n        { name: 'alive',    type: 'boolean', defaultValue: true }\n    ],\n\n    validators: {\n        age: 'presence',\n        name: { type: 'length', min: 2 },\n        gender: { type: 'inclusion', list: ['Male', 'Female'] },\n        username: [\n            { type: 'exclusion', list: ['Admin', 'Operator'] },\n            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }\n        ]\n    }\n});\n</code></pre>\n\n<p>The derived type of <code>Ext.data.field.Field</code> can also provide validation. If <code>validators</code>\nneed to be duplicated on multiple fields, instead consider creating a custom field type.</p>\n\n<h2>Validation</h2>\n\n<p>The results of the validators can be retrieved via the \"associated\" validation record:</p>\n\n<pre><code>var instance = Ext.create('User', {\n    name: 'Ed',\n    gender: 'Male',\n    username: 'edspencer'\n});\n\nvar validation = instance.getValidation();\n</code></pre>\n\n<p>The returned object is an instance of <code>Ext.data.Validation</code> and has as its fields the\nresult of the field <code>validators</code>. The validation object is \"dirty\" if there are one or\nmore validation errors present.</p>\n\n<p>This record is also available when using data binding as a \"pseudo-association\" called\n\"validation\". This pseudo-association can be hidden by an explicitly declared\nassociation by the same name (for compatibility reasons), but doing so is not\nrecommended.</p>\n\n<p>The <code><a href=\"#!/api/Ext.Component-cfg-modelValidation\" rel=\"Ext.Component-cfg-modelValidation\" class=\"docClass\">Ext.Component.modelValidation</a></code> config can be used to enable automatic\nbinding from the \"validation\" of a record to the form fields that may be bound to its\nvalues.</p>\n\n<h1>Associations</h1>\n\n<p>Models often have associations with other Models. These associations can be defined by\nfields (often called \"foreign keys\") or by other data such as a many-to-many (or \"matrix\").</p>\n\n<h2>Foreign-Key Associations - One-to-Many</h2>\n\n<p>The simplest way to define an association from one Model to another is to add a\nreference config to the appropriate field.</p>\n\n<pre><code> Ext.define('Post', {\n     extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n\n     fields: [\n         { name: 'user_id', reference: 'User' }\n     ]\n });\n\n Ext.define('Comment', {\n     extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n\n     fields: [\n         { name: 'user_id', reference: 'User' },\n         { name: 'post_id', reference: 'Post' }\n     ]\n });\n\n Ext.define('User', {\n     extend: 'Ext.data.Model',\n\n     fields: [\n         'name'\n     ]\n });\n</code></pre>\n\n<p>The placement of <code>reference</code> on the appropriate fields tells the Model which field has\nthe foreign-key and the type of Model it identifies. That is, the value of these fields\nis set to value of the <code>idProperty</code> field of the target Model.</p>\n\n<h3>One-to-Many Without Foreign-Keys</h3>\n\n<p>To define an association without a foreign-key field, you will need to use either the\n<code>hasMany</code> or <code>belongsTo</code>.</p>\n\n<pre><code> Ext.define('Post', {\n     extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n\n     belongsTo: 'User'\n });\n\n Ext.define('Comment', {\n     extend: 'Ext.data.Model',\n\n     belongsTo: [ 'Post', 'User' ]\n });\n\n // User is as above\n</code></pre>\n\n<p>These declarations have changed slightly from previous releases. In previous releases\nboth \"sides\" of an association had to declare their particular roles. This is now only\nrequired if the defaults assumed for names are not satisfactory.</p>\n\n<h2>Foreign-Key Associations - One-to-One</h2>\n\n<p>A special case of one-to-many associations is the one-to-one case. This is defined as\na <code>unique reference</code>.</p>\n\n<pre><code> Ext.define('Address', {\n     extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n\n     fields: [\n         'address',\n         'city',\n         'state'\n     ]\n });\n\n Ext.define('User', {\n     extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n\n     fields: [{\n         name: 'addressId',\n         reference: 'Address',\n         unique: true\n     }]\n });\n</code></pre>\n\n<h2>Many-to-Many</h2>\n\n<p>The classic use case for many-to-many is a User and Group. Users can belong to many\nGroups and Groups can contain many Users. This association is declared using the\n<code>manyToMany</code> config like so:</p>\n\n<pre><code> Ext.define('User', {\n     extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n\n     fields: [\n         'name'\n     ],\n\n     manyToMany: 'Group'\n });\n\n Ext.define('Group', {\n     extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n\n     fields: [\n         'name'\n     ],\n\n     manyToMany: 'User'\n });\n</code></pre>\n\n<p>As with other associations, only one \"side\" needs to be declared.</p>\n\n<p>To manage the relationship between a <code>manyToMany</code> relationship, a Ext.data.Session\nmust be used.</p>\n\n<h1>Using a Proxy</h1>\n\n<p>Models are great for representing types of data and relationships, but sooner or later we're going to want to load or\nsave that data somewhere. All loading and saving of data is handled via a Proxy, which\ncan be set directly on the Model:</p>\n\n<pre><code>Ext.define('User', {\n    extend: '<a href=\"#!/api/Chaching.model.base.BaseModel\" rel=\"Chaching.model.base.BaseModel\" class=\"docClass\">Chaching.model.base.BaseModel</a>',\n    fields: ['id', 'name', 'email'],\n\n    proxy: {\n        type: 'rest',\n        url : '/users'\n    }\n});\n</code></pre>\n\n<p>Here we've set up a Rest Proxy, which knows how to load and save data to and from a\nRESTful backend. Let's see how this works:</p>\n\n<pre><code>var user = Ext.create('User', {name: 'Ed Spencer', email: 'ed@sencha.com'});\n\nuser.save(); //POST /users\n</code></pre>\n\n<p>Calling save on the new Model instance tells the configured RestProxy that we wish to persist this Model's\ndata onto our server. RestProxy figures out that this Model hasn't been saved before because it doesn't have an id,\nand performs the appropriate action - in this case issuing a POST request to the url we configured (/users). We\nconfigure any Proxy on any Model and always follow this API - see Ext.data.proxy.Proxy for a full list.</p>\n\n<p>Loading data via the Proxy is accomplished with the static <code>load</code> method:</p>\n\n<pre><code>//Uses the configured RestProxy to make a GET request to /users/123\nUser.load(123, {\n    success: function(user) {\n        console.log(user.getId()); //logs 123\n    }\n});\n</code></pre>\n\n<p>Models can also be updated and destroyed easily:</p>\n\n<pre><code>//the user Model we loaded in the last snippet:\nuser.set('name', 'Edward Spencer');\n\n//tells the Proxy to save the Model. In this case it will perform a PUT request to /users/123 as this Model already has an id\nuser.save({\n    success: function() {\n        console.log('The User was updated');\n    }\n});\n\n//tells the Proxy to destroy the Model. Performs a DELETE request to /users/123\nuser.erase({\n    success: function() {\n        console.log('The User was destroyed!');\n    }\n});\n</code></pre>\n\n<h1>HTTP Parameter names when using a Ajax proxy</h1>\n\n<p>By default, the model ID is specified in an HTTP parameter named <code>id</code>. To change the\nname of this parameter use the Proxy's idParam\nconfiguration.</p>\n\n<p>Parameters for other commonly passed values such as\npage number or\nstart row may also be configured.</p>\n\n<h1>Usage in Stores</h1>\n\n<p>It is very common to want to load a set of Model instances to be displayed and manipulated in the UI. We do this by\ncreating a Store:</p>\n\n<pre><code>var store = Ext.create('Ext.data.Store', {\n    model: 'User'\n});\n\n//uses the Proxy we set up on Model to load the Store data\nstore.load();\n</code></pre>\n\n<p>A Store is just a collection of Model instances - usually loaded from a server somewhere. Store can also maintain a\nset of added, updated and removed Model instances to be synchronized with the server via the Proxy. See the Store docs for more information on Stores.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-searchEntityName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.BaseModel'>Chaching.model.base.BaseModel</span><br/><a href='source/BaseModel.html#Chaching-model-base-BaseModel-cfg-searchEntityName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.BaseModel-cfg-searchEntityName' class='name expandable'>searchEntityName</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.BaseModel'>Chaching.model.base.BaseModel</span><br/><a href='source/BaseModel.html#Chaching-model-base-BaseModel-property-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.BaseModel-property-fields' class='name expandable'>fields</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-schema' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.BaseModel'>Chaching.model.base.BaseModel</span><br/><a href='source/BaseModel.html#Chaching-model-base-BaseModel-property-schema' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.BaseModel-property-schema' class='name expandable'>schema</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{namespace: &#39;Chaching.model&#39;}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getSearchEntityName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.BaseModel'>Chaching.model.base.BaseModel</span><br/><a href='source/BaseModel.html#Chaching-model-base-BaseModel-cfg-searchEntityName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.BaseModel-method-getSearchEntityName' class='name expandable'>getSearchEntityName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of searchEntityName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Chaching.model.base.BaseModel-cfg-searchEntityName\" rel=\"Chaching.model.base.BaseModel-cfg-searchEntityName\" class=\"docClass\">searchEntityName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSearchEntityName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.BaseModel'>Chaching.model.base.BaseModel</span><br/><a href='source/BaseModel.html#Chaching-model-base-BaseModel-cfg-searchEntityName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.BaseModel-method-setSearchEntityName' class='name expandable'>setSearchEntityName</a>( <span class='pre'>searchEntityName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of searchEntityName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Chaching.model.base.BaseModel-cfg-searchEntityName\" rel=\"Chaching.model.base.BaseModel-cfg-searchEntityName\" class=\"docClass\">searchEntityName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>searchEntityName</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});