(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{547:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),i=(r(0),r(747)),o={title:"Properties and actions block"},p={unversionedId:"Properties_and_actions_block",id:"version-v4/Properties_and_actions_block",isDocsHomePage:!1,title:"Properties and actions block",description:"The property and action block of the FORM instruction adds properties and actions to the form structure.",source:"@site/versioned_docs/version-v4/Properties_and_actions_block.md",slug:"/Properties_and_actions_block",permalink:"/platform/Properties_and_actions_block",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Properties_and_actions_block.md",version:"v4",lastUpdatedAt:1618526625,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Object blocks",permalink:"/platform/Object_blocks"},next:{title:"Filters and sortings block",permalink:"/platform/Filters_and_sortings_block"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:b};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The property and action block of the ",Object(i.b)("a",{parentName:"p",href:"/platform/FORM_instruction"},"FORM instruction")," adds ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_structure#properties"},"properties and actions")," to the ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_structure"},"form structure"),". "),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"PROPERTIES [(cparam1, ..., cparamN)] [formPropertyOptions] formPropertyDecl1, ..., formPropertyDeclM\n")),Object(i.b)("p",null,"Each ",Object(i.b)("inlineCode",{parentName:"p"},"formPropertyDecl")," describes the property or action being added to the form structure and has the following syntax:"),Object(i.b)("p",null,"If the common parameters ",Object(i.b)("inlineCode",{parentName:"p"},"(cparam1, ..., cparamN)")," have been specified:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[[alias1] [caption1] =] [ACTION] formPropertyId1 [formPropertyOptions1], ..., [[aliasK] [captionK] =] [ACTION] formPropertyIdK [formPropertyOptionsK] \n")),Object(i.b)("p",null,"If the common parameters of the block have not been specified, then:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[[alias1] [caption1] =] formMappedProperty1 [formPropertyOptions1], ..., [[aliasK] [captionK] =] formMappedPropertyK [formPropertyOptionsK] \n")),Object(i.b)("p",null,"Each ",Object(i.b)("inlineCode",{parentName:"p"},"formMappedProperty")," describes the implementation of a property or action being added to the form and having one of the following syntaxes"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[ACTION] formPropertyId(param1, ..., paramN1) \nformPropertyExpression \n\n{ formActionOperator }\n")),Object(i.b)("p",null,"Each ",Object(i.b)("inlineCode",{parentName:"p"},"formPropertyOptions")," specifies options for the property or action being added to the form structure. They can be added one by one in arbitrary order:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"changeType\nSHOWIF propertyExpression\nREADONLYIF propertyExpression\nBACKGROUND propertyExpression\nFOREGROUND propertyExpression\nHEADER propertyExpression\nFOOTER propertyExpression\nCOLUMNS [groupid] (groupName1, ..., groupNameM)\nviewType\nNEWSESSION | NESTEDSESSION\nDRAW groupObjectName \nBEFORE formPropertyName\nAFTER formPropertyName\nQUICKFILTER formPropertyName\nON eventType actionId(param1, ..., paramZ) | { actionOperator }\nATTR\nEXTID extID\nIN propertyGroup\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"One ",Object(i.b)("inlineCode",{parentName:"p"},"PROPERTIES")," block adds properties and actions to the form structure. To add a property (action), specify its ID and the ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_structure#objects"},"form objects")," whose values will be passed to this property (action) as arguments. Sometimes it\u2019s convenient to list these form objects for the entire ",Object(i.b)("inlineCode",{parentName:"p"},"PROPERTIES")," block. To do this, specify the block of ",Object(i.b)("em",{parentName:"p"},"common parameters"),". In this case, when adding a property (action), you only need to specify its ID, while the common parameters will be passed as arguments."),Object(i.b)("p",null,"Each property (action) being added to the form structure must have a ",Object(i.b)("em",{parentName:"p"},"unique name within the form"),". This name may be specified either explicitly or based on the name of the property and the passed parameters, i.e. names of objects separated by commas. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"FORM order\nOBJECTS o=Order \nPROPERTIES(o) d=date, Order.number;\n")),Object(i.b)("p",null,"In the given example, the names of the added properties ",Object(i.b)("inlineCode",{parentName:"p"},"date")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Order.number")," will be ",Object(i.b)("inlineCode",{parentName:"p"},"d")," and ",Object(i.b)("inlineCode",{parentName:"p"},"number(o)")," respectively."),Object(i.b)("p",null,"When adding a property (action) to the form structure, you may specify a set of its options. You may also specify common options for the entire ",Object(i.b)("inlineCode",{parentName:"p"},"PROPERTIES")," block. If any of the options are specified for both the entire block and a specific declaration, the option value for the declaration will be used."),Object(i.b)("p",null,"In all ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions")," and ",Object(i.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operators"),", you can use the names of the objects already declared on the form as parameters."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cparam1, ..., cparamN")),Object(i.b)("p",{parentName:"li"},"  List of common parameters of the block. Each parameter is specified with the name of the object on the form. If this list is defined, then adding a property (action) will require that you specify only its ID without parameters. The object name is specified with ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"simple ID"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"alias")),Object(i.b)("p",{parentName:"li"},"  The name of the property or action being added to the form. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". If the name is not specified, then the name of the property (action) on the form will be the same as the property's name itself (but without the namespace and signature) with parameters, i.e. names of the objects separated by commas and enclosed in brackets. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"caption")),Object(i.b)("p",{parentName:"li"},"  The caption of the property or action being added to the form. ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If the caption is not specified, then the caption of the property (action) itself will be used on the form."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In the current platform implementation, if the name and caption are not specified together, then ",Object(i.b)("inlineCode",{parentName:"p"},"=")," is required when using the expressions and action operators (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"f(a,b)"),", but ",Object(i.b)("inlineCode",{parentName:"p"},"=a*b+5"),")"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"formPropertyId")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property or action")," being added to the form structure."),Object(i.b)("p",{parentName:"li"},"  Alternatively, you may use ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#objectoperators"},"object operators")," instead of the property/action IDs:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VALUE")," displays the object value (or the object ID for custom classes)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NEW")," creates a new object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EDIT")," edits the object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DELETE")," deletes the object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NEWEDIT")," creates and edits a new object.")),Object(i.b)("p",{parentName:"li"},"In addition, you may use brackets to explicitly specify a class whose object will be added/edited (e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"NEW[A]"),") for operators ",Object(i.b)("inlineCode",{parentName:"p"},"NEW"),", ",Object(i.b)("inlineCode",{parentName:"p"},"EDIT"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"NEWEDIT")," or for property/action IDs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ACTION")),Object(i.b)("p",{parentName:"li"},"  Keyword. When specified, it is considered that the action is specified in formPropertyId. When not specified, it is initially considered that a property is specified in formPropertyId; otherwise, if property is not found, it is considered that an action is specified in formPropertyId.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"param1, ..., paramNk")),Object(i.b)("p",{parentName:"li"},"  List of parameters of the added properties or actions. Each parameter is specified with the name of the object on the form. The number of specified parameters must match the number of parameters for the property or action being added. Not specified if the common parameters block is specified. The object name, in turn, is specified with a ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"simple ID"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"formPropertyExpression")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression")," being added to the form structure.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"formActionOperator")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"Context-dependent action operator")," being added to the form structure."))),Object(i.b)("h4",{id:"options-for-the-property-or-action"},"Options for the property or action"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"changeType")),Object(i.b)("p",{parentName:"li"},"  Specifying ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events#predefined"},"standard handlers")," for property/action change events. It is specified with one of the keywords:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CHANGEABLE")," calls the corresponding handler of the triggered event. Default value. It makes sense to use it explicitly only when another modifier is defined for the entire block but should not be applied to a specific property."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READONLY")," will either turn on the filtering mechanism or simply ignore the event when the user tries to change the property."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SELECTOR")," shows a dialog for changing the current value of the object (not the property value) when the user tries to change the property. Applicable only for properties with one parameter."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"SHOWIF propertyExpression")),Object(i.b)("p",{parentName:"li"},"  Specifies a property that determines visibility of the property or action being added to the form. If the value of this property is ",Object(i.b)("inlineCode",{parentName:"p"},"NULL"),", then the property (action) being added will not be displayed. Cannot be used together with the ",Object(i.b)("inlineCode",{parentName:"p"},"HEADER")," option."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyExpression")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"READONLYIF propertyExpression")),Object(i.b)("p",{parentName:"li"},"  Specifies a property that allows or prohibits changing the property being added (or execution of the action being added). If the value of this property is ",Object(i.b)("inlineCode",{parentName:"p"},"NULL"),", then the property being added will not be changeable, and the action being added will not be executable. The behavior is similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"READONLY")," option, but with an additional data-dependant condition."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyExpression")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"BACKGROUND propertyExpression")),Object(i.b)("p",{parentName:"li"},"  Specifying a property that determines the background color for the value cell of the property (action) being added. The property may have the ",Object(i.b)("inlineCode",{parentName:"p"},"COLOR")," type (in this case, its value will be used) or any other type. In this case, if the value is not equal ",Object(i.b)("inlineCode",{parentName:"p"},"NULL"),", then either the default color stored in the global property ",Object(i.b)("inlineCode",{parentName:"p"},"System.defaultBackgroundColor")," (set in settings) or yellow color (if the default color is not set) will be used."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyExpression")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FOREGROUND propertyExpression")),Object(i.b)("p",{parentName:"li"},"  Specifying a property that determines the text color for the value cell of the property (action) being added. The property may have the ",Object(i.b)("inlineCode",{parentName:"p"},"COLOR")," type (in this case, its value will be used) or any other type. In this case, if the value is not equal to ",Object(i.b)("inlineCode",{parentName:"p"},"NULL"),", then either the default text color stored in the global property ",Object(i.b)("inlineCode",{parentName:"p"},"System.defaultForegroundColor")," (set in settings) or red color (if the default color is not set) will be used."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyExpression")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"HEADER propertyExpression")),Object(i.b)("p",{parentName:"li"},"  Specifying a property that determines the header for the column of the property (action) being added. The return value of this property will be used as the header. If the return value is ",Object(i.b)("inlineCode",{parentName:"p"},"NULL"),", then the added property (action) will be automatically hidden. "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyExpression")),Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FOOTER propertyExpression")),Object(i.b)("p",{parentName:"li"},"  Specifying a property that determines the footer of the property (action) being added. Used only in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Print_view"},"print view")," of the form."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyExpression")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"COLUMNS [groupid] (groupName1, ..., groupNameM)")),Object(i.b)("p",{parentName:"li"},"  Specifies the upper ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_structure#objects"},"object groups")," whose values will define a set of ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_structure#groupcolumns-broken"},"columns")," to display the added property (action). The ",Object(i.b)("inlineCode",{parentName:"p"},"COLUMNS")," option is often used with the ",Object(i.b)("inlineCode",{parentName:"p"},"HEADER")," option which defines headers for these columns."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"groupid")),Object(i.b)("p",{parentName:"li"},"  Column group ID. ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If the ",Object(i.b)("inlineCode",{parentName:"p"},"COLUMNS")," option is specified for several properties (actions) being added with the same set of object groups, then by default the columns of the first property (action) will be added, followed by the columns of the second property (action), and so on. To group columns of different properties (actions) by values of the upper objects, you can set for them the same string ID of the group of columns. In this case, the columns for different properties (actions) will alternate. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"groupName1, ..., groupNameM")),Object(i.b)("p",{parentName:"li"},"  List of the names of the upper object groups. Each name is defined ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"by a simple ID"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"DRAW groupObjectName")),Object(i.b)("p",{parentName:"li"},"  Specifying the name of the object group on the form where the added property or action will be displayed in the table of the specified object group."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"groupObjectName")),Object(i.b)("p",{parentName:"li"},"  Name of an object group. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"viewType")),Object(i.b)("p",{parentName:"li"},"  Specifying the ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#property"},"view type")," of the property or action being added:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GRID")," \u2014 table column"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TOOLBAR")," \u2014 toolbar"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PANEL")," \u2014 panel")),Object(i.b)("p",{parentName:"li"},"If not specified, the corresponding option from the ",Object(i.b)("a",{parentName:"p",href:"/platform/Property_options"},"property options")," is used. If it is also not specified, then the ",Object(i.b)("a",{parentName:"p",href:"/platform/Interactive_view#defaultPropertyView-broken"},"default view type")," is used for the display group of this property or action.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"NEWSESSION")," | ",Object(i.b)("inlineCode",{parentName:"p"},"NESTEDSESSION")),Object(i.b)("p",{parentName:"li"},"  Modifiers specifying that object operators (",Object(i.b)("inlineCode",{parentName:"p"},"NEW"),", ",Object(i.b)("inlineCode",{parentName:"p"},"EDIT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"DELETE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"NEWEDIT"),") must be executed in a new (nested) session.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"BEFORE formPropertyName")," | ",Object(i.b)("inlineCode",{parentName:"p"},"AFTER  formPropertyName")),Object(i.b)("p",{parentName:"li"},"  Specifying that a property or an action should be added to the form structure before (keyword ",Object(i.b)("inlineCode",{parentName:"p"},"BEFORE"),") or after (keyword ",Object(i.b)("inlineCode",{parentName:"p"},"AFTER"),") the previously added property or action. Typically used in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_extension"},"form extension")," concept."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"formPropertyName")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"#name-broken"},"Property/action name on the form"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"QUICKFILTER formPropertyName")),Object(i.b)("p",{parentName:"li"},"  Specifying the property to be used in ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events#default"},"default handlers")," for quick filtering."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"formPropertyName")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"#name-broken"},"Property name/actions on the form"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ON eventType actionId(param1, ..., paramZ) | { actionOperator }")),Object(i.b)("p",{parentName:"li"},"  Specifying the action that will be executed when the specified ",Object(i.b)("a",{parentName:"p",href:"/platform/Form_events"},"form event")," occurs."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventType")),Object(i.b)("p",{parentName:"li"},"  Type of form event. It is specified by one of the following keywords:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CHANGE")," \u2014 the user tries to change the value of the property being added (call the added action). ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CHANGEWYS")," \u2014 the user tries to change the displayed value of the property. It is triggered when the user inserts a text into the added property (by pressing Ctrl + V or similarly). ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GROUPCHANGE")," \u2014 the user tries to change the property value for all objects in the table (group change).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"EDIT")," \u2014 the user tries to edit the object that represents the property value.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CONTEXTMENU [caption]")," is the event type which adds a menu item executing the specified action to the context menu of the property (action) on the form. You can also specify the caption for this menu item (as string literal). If it is not specified, then, by default, it will be the same as the action caption."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"caption")),Object(i.b)("p",{parentName:"li"},"  Caption of the item in the context menu. ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If the caption is not specified explicitly, then it will be the same as the caption of the action called upon the event.")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"actionId")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"Action ID"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"param1, ..., paramZ")),Object(i.b)("p",{parentName:"li"},"  List of action parameters. Each parameter is specified with the object name on the form. The object name, in turn, is specified with a simple ID.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"actionOperator")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"Context-dependent action operator"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ATTR")),Object(i.b)("p",{parentName:"li"},"  Keyword. Used only in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Structured_view#hierarchy"},"hierarchical")," view. Indicates that:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When importing from XML, the data is imported from the tag attributes instead of the child tag."),Object(i.b)("li",{parentName:"ul"},"When exporting to XML, the data is exported to the tag attributes instead of the child tag."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"EXTID extID")),Object(i.b)("p",{parentName:"li"},"  Specifying the name to be used for ",Object(i.b)("a",{parentName:"p",href:"/platform/Structured_view#extid"},"export/import")," operations of this property. Used only in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Structured_view"},"structured")," view."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"extId")),Object(i.b)("p",{parentName:"li"},"  String literal.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"IN propertyGroup")),Object(i.b)("p",{parentName:"li"},"  Specifying a ",Object(i.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"property/action group")," which the property (action) on the form belongs to. If this option is not specified, then the property group of the property itself will be used as the property (action) group on the form. "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"propertyGroup")),Object(i.b)("p",{parentName:"li"},"  The property group name. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),"."))))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order;\ndate = DATA DATE (Order);\ntime = DATA TIME (Order);\nnumber = DATA INTEGER (Order);\nseries = DATA BPSTRING[2] (Order);\n\nnote = DATA ISTRING[255] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndate(OrderDetail d) = date(order(d));\n\nindex (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n\nsku = DATA Sku (OrderDetail);\nnameSku (OrderDetail d) = name(sku(d));\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[12,2] (OrderDetail);\n\nsum (Order o) = GROUP SUM sum(OrderDetail d) BY order(d);\n\nquantity (Order o, Sku s) = GROUP SUM quantity(OrderDetail d) BY order(d), sku(d);\nlastDetail (Order o, Sku s) = GROUP MAX OrderDetail d BY order(d), sku(d);\nchangeQuantity (Order o, Sku s)  {\n    INPUT n = NUMERIC[10,2] DO {\n        IF lastDetail(o, s) THEN {\n            IF n THEN\n                quantity(OrderDetail d) <- n WHERE d == lastDetail(o, s);\n            ELSE\n                DELETE OrderDetail d  WHERE d == lastDetail(o, s);\n        } ELSE IF n THEN {\n            NEW d = OrderDetail {\n                order(d) <- o;\n                sku(d) <- s;\n                quantity(d) <- n;\n            }\n        }\n    }\n}\n\nstopOrder = DATA BOOLEAN (Sku);\nonStock = DATA NUMERIC[10,2] (Sku);\nordered = DATA NUMERIC[10,2] (Sku);\n\nCLASS Customer;\nname = DATA ISTRING[100] (Customer);\nFORM customers\n    OBJECTS c = Customer\n    PROPERTIES(c) READONLY name\n    LIST Customer OBJECT c\n;\n\ncustomer = DATA Customer (Order);\nnameCustomer (Order o) = name(customer(o));\n\ncustomer(OrderDetail d) = customer(order(d));\n\nCLASS Region;\nname = DATA STRING[100] (Region);\n\nregion = DATA Region (Customer);\n\n// declaring the orders form\nFORM order 'Order'\n    OBJECTS o = Order PANEL // adding an order object to the form\n    PROPERTIES VALUE(o), // adding the order ID in the database\n               date(o), time(o), series(o), number(o), // adding properties date/time of order, series/order number\n               nameCustomer(o), // adding the name of the customer, which by default will be available for editing\n                                     // here, when the user tries to edit it, a dialog will be called for the customer choice - a form for which the LIST customer parameter is set\n               note(o), // adding a note\n               sum(o) READONLY // adding the order amount without the possibility of editing, since it is automatically calculated based on the sum of rows\n\n    OBJECTS d = OrderDetail // adding the order line object\n    PROPERTIES(d) // all properties in this block will have an order line input\n                  index READONLY, // adding the ordinal line number and making it impossible to edit\n                  nameSku, // adding a name\n                  quantity, price, sum, // adding quantity, price, amount\n                  NEW, // adding the predefined NEW action that adds a new order line\n                  DELETE // adding an action that will delete the order line\n    FILTERS order(d) == o // indicating that only lines related to this order should be shown\n\n    OBJECTS s = Sku // adding a sku object to which the totals for each sku in the order will be written\n    PROPERTIES(s) name READONLY // adding a name, while making a note that it cannot be edited on this form\n\n    PROPERTIES quantity(o, s) // adding a property that will display the ordered quantity by sku in this order\n               ON CHANGE changeQuantity(o, s) // by default, even though the property is not marked READONLY and nothing will happen when the user tries to change it, since quantity is an aggregated property\n                                                           // in this case, a note is made that when the user tries to change, the changeQuantity action will be called\n                                                           // an algorithm is written in this property that will create/delete order lines or change the quantity in them\n               READONLYIF stopOrder(s) // making the property unavailable for editing, if the order is prohibited for this sku\n               BACKGROUND stopOrder(s) // in addition, in this case, this cell is highlighted with custom background so that the user can see such positions in advance\n\n    EDIT Order OBJECT o // marking the form as a form for editing orders\n;\n\nEXTEND FORM order // expanding the form with the Mixin concept\n    PROPERTIES onStock(s) BEFORE quantity(d), // adding the property of the current balance to the form before the quantity in the order\n               ordered(s) BEFORE quantity(d) // adding to the form the quantity of already ordered products within all orders\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY VALUE, date, number // all properties in this block are unavailable for editing\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE // adding predefined NEW and EDIT actions that will call the order form to add orders\n;\n\n// creating a \"report\" in which orders for a certain interval will be visible in the context of customers in a particular region\nFORM orderReport 'Sales by warehouse'\n    OBJECTS interval = (dateFrom 'Date (from)' = DATE, dateTo 'Date (to)' = DATE) PANEL // declaring a group of objects, consisting of 2 objects of the Date class with the appropriate captions, which will always be displayed as a panel\n    PROPERTIES dateFrom = VALUE(dateFrom), dateTo = VALUE(dateTo) // adding to the form the properties of the date objects values, with which the user can select dates\n                                                                        // in addition, assigning to these properties on the form names dateFrom and dateTo, respectively\n\n    OBJECTS r = Region PANEL // adding a region object, by which customers will be filtered\n    PROPERTIES(r) name SELECTOR // adding the property region name, at the same time marking that when editing it, the dialog for choosing a region should be called, the selected value of which will be used as the current value\n\n    OBJECTS c = Customer // adding the customers object\n                         // specifically not adding a single property so that it is \"invisible\", but it is needed in order to display customers in columns\n    FILTERS region(c) == r // setting a filter so that customers are only from this region\n\n    OBJECTS s = Sku // adding a sku object, in the table of which basic information will be displayed\n    PROPERTIES(s) name READONLY // adding the sku name and making it READONLY, otherwise the user will be able to change the product names directly in the report\n\n    PROPERTIES = [ GROUP SUM quantity(OrderDetail d) IF date(d) >= dateFrom AND date(d) <= dateTo BY sku(d), customer(d)](s, c)\n                // adding a property in which the quantity of ordered sku by customers for a certain date interval is calculated\n               COLUMNS (c) // marking that customers should be displayed in columns, with the same number of columns as there will be rows in the customer object, taking into account filters, and they will be displayed in the same order\n               HEADER name(c) // setting that the name of the customer will be used as the column heading\n;\n")))}c.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,h=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return r?n.a.createElement(h,p(p({ref:t},l),{},{components:r})):n.a.createElement(h,p({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);