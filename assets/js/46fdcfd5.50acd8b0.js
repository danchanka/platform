(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[55518],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),h=a,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(u,p(p({ref:t},d),{},{components:r})):n.createElement(u,p({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85459:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"Properties and actions block"},i={unversionedId:"Properties_and_actions_block",id:"Properties_and_actions_block",isDocsHomePage:!1,title:"Properties and actions block",description:"The\xa0property and action block of the FORM instruction\xa0adds properties and actions to the form structure.",source:"@site/docs/Properties_and_actions_block.md",sourceDirName:".",slug:"/Properties_and_actions_block",permalink:"/platform/next/Properties_and_actions_block",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Properties_and_actions_block.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Properties and actions block"},sidebar:"learn",previous:{title:"Object blocks",permalink:"/platform/next/Object_blocks"},next:{title:"Filters and sortings block",permalink:"/platform/next/Filters_and_sortings_block"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"*Options<strong>*\xa0*</strong>for the property or action*",id:"options-for-the-property-or-action",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The\xa0property and action ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/FORM_instruction"},"block of the FORM instruction"),"\xa0adds ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_structure#properties"},"properties and actions")," to the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_structure"},"form structure"),".\xa0"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PROPERTIES [(cparam1, ..., cparamN)] [formPropertyOptions] formPropertyDecl1, ..., formPropertyDeclM\n")),(0,o.kt)("p",null,"Each\xa0",(0,o.kt)("em",{parentName:"p"},"formPropertyDecl"),"\xa0describes the property or action being added to the form structure and has the following syntax:"),(0,o.kt)("p",null,"If the common parameters of the ",(0,o.kt)("strong",{parentName:"p"},"PROPERTIES"),"\xa0",(0,o.kt)("em",{parentName:"p"},"(cparam1, ..., cparamN)")," block have been specified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[[alias1] [caption1] =] [ACTION] formPropertyId1 [formPropertyOptions1], ..., [[aliasK] [captionK] =] [ACTION] formPropertyIdK [formPropertyOptionsK] \n")),(0,o.kt)("p",null,"If the common parameters of the block have not been specified, then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[[alias1] [caption1] =] formMappedProperty1 [formPropertyOptions1], ..., [[aliasK] [captionK] =] formMappedPropertyK [formPropertyOptionsK] \n")),(0,o.kt)("p",null,"Each formMappedProperty describes the implementation of a property or action being added to the form and having one of the following syntaxes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ACTION] formPropertyId(param1, ..., paramN1) \nformPropertyExpression \n\n{ formActionOperator }\n")),(0,o.kt)("p",null,"Each ",(0,o.kt)("em",{parentName:"p"},"formPropertyOptions")," specifies options for the property or action being added to the form structure. They can be added one by one in arbitrary order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"changeType\nSHOWIF propertyExpression\nREADONLYIF propertyExpression\nBACKGROUND propertyExpression\nFOREGROUND propertyExpression\nHEADER propertyExpression\nFOOTER propertyExpression\nCOLUMNS [groupid] (groupName1, ..., groupNameM)\nviewType\nNEWSESSION | NESTEDSESSION\nDRAW groupObjectName \nBEFORE formPropertyName\nAFTER formPropertyName\nQUICKFILTER formPropertyName\nON eventType actionId(param1, ..., paramZ) | { actionOperator }\nATTR\nEXTID extID\nIN propertyGroup\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"One\xa0",(0,o.kt)("strong",{parentName:"p"},"PROPERTIES"),"\xa0block adds properties and actions to the form structure. To add a property (action), specify its ID and the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_structure#objects"},"form objects")," whose values will be passed to this property (action) as arguments. Sometimes it\u2019s convenient to list these form objects for the entire ",(0,o.kt)("strong",{parentName:"p"},"PROPERTIES")," block. To do this, specify the block of ",(0,o.kt)("em",{parentName:"p"},"common parameters"),". In this case, when adding a property (action), you only need to specify its ID, while the common parameters will be passed as arguments."),(0,o.kt)("p",null,"Each property (action) being added to the form structure must have a ",(0,o.kt)("em",{parentName:"p"},"unique name within the form"),". This name may be specified either explicitly or based on the name of the property and the passed parameters, i. e. names of objects separated by commas.\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FORM order\nOBJECTS o=Order \nPROPERTIES(o) d=date, Order.number;\n")),(0,o.kt)("p",null,"In the given example, the names of the added properties ",(0,o.kt)("strong",{parentName:"p"},"date")," and ",(0,o.kt)("strong",{parentName:"p"},"Order.number")," will be ",(0,o.kt)("strong",{parentName:"p"},"d")," and ",(0,o.kt)("strong",{parentName:"p"},"number(o)")," respectively."),(0,o.kt)("p",null,"When adding a property (action) to the form structure, you may specify a set of its options. You may also specify common options for the entire ",(0,o.kt)("strong",{parentName:"p"},"PROPERTIES")," block.\xa0If any of the options are specified for both the entire block and a specific declaration, the option value for the declaration will be used."),(0,o.kt)("p",null,"In all ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"expressions")," and ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent\xa0action operators"),",\xa0you can use the names of the objects already declared on the form as parameters."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"cparam1, ..., cparamN")),(0,o.kt)("p",null,"List of common parameters of the block. Each parameter is specified with the name of the object\xa0on the form. If this list is defined, then adding a property (action) will require that you specify only its ID without parameters.\xa0The object name is specified with\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"simple ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"alias")),(0,o.kt)("p",null,"The name of the property or action being added to the form. ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple ID"),". If the name is not specified, then the name of the property (action) on the form will be the same as the property's name itself (but without the namespace and signature) with parameters, i. e. names of the objects separated by commas and enclosed in brackets.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"caption")),(0,o.kt)("p",null,"The caption of the property or action being added to the form.\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),".\xa0If the caption is not specified, then the caption of the property (action) itself will be used on the form."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the current platform implementation, if the name and caption are not specified together, then ",(0,o.kt)("strong",{parentName:"p"},"=")," is required when using the expressions and action operators (i. e. f(a,b), but =a","*","b+5)"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"formPropertyId")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property or action")," being added to the form structure."),(0,o.kt)("p",null,"Alternatively, you may use ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Interactive_view#objectoperators"},"object operators")," instead of the property/action IDs:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"VALUE")," displays the object value (or the object ID for custom classes)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NEW"),"\xa0creates a new object."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EDIT")," edits the object."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DELETE")," deletes the object."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NEWEDIT")," creates and edits a new object."),(0,o.kt)("p",null,"In addition, you may use brackets to explicitly\xa0specify a class whose object will be added/edited (e. g. ",(0,o.kt)("strong",{parentName:"p"},"NEW","[","A","]"),") for operators ",(0,o.kt)("strong",{parentName:"p"},"NEW"),", ",(0,o.kt)("strong",{parentName:"p"},"EDIT"),", and ",(0,o.kt)("strong",{parentName:"p"},"NEWEDIT")," or for property/action IDs."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ACTION")),(0,o.kt)("p",null,"Keyword. When specified, it is considered that the action is specified in\xa0formPropertyId. When not specified, it is initially considered that a property is specified in\xa0formPropertyId; otherwise, if property is not found, it is considered that an action is specified in\xa0formPropertyId."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"param1, ..., paramNk")),(0,o.kt)("p",null,"List of parameters of the added properties or actions. Each parameter is specified with the name of the object on the form. The number of specified parameters must match the number of parameters for the property or action being added. Not specified if the common parameters block is specified.\xa0The object name, in turn, is specified with a\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"simple ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"formPropertyExpression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression")," being added to the form structure."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"formActionOperator")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent action operator")," being added to the form structure"),(0,o.kt)("h3",{id:"options-for-the-property-or-action"},"*Options",(0,o.kt)("strong",{parentName:"h3"},"*\xa0*"),"for the property or action*"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"changeType")),(0,o.kt)("p",null,"Specifying ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_events#predefined"},"standard handlers")," for property/action change events. It is specified with one of the keywords:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CHANGEABLE")," calls the corresponding handler of the triggered event. Default value. It makes sense to use it explicitly only when another modifier is defined for the entire block but should not be applied to a specific property."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"READONLY"),"\xa0will either turn on the filtering mechanism or simply ignore the event when the user tries to change the property."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SELECTOR"),"\xa0shows a dialog for changing the current value of the object (not the property value) when the user tries to change the property. Applicable only for properties with one parameter.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SHOWIF propertyExpression")),(0,o.kt)("p",null,"Specifies a property that determines visibility of the property or action being added to the form. If the value of this property is ",(0,o.kt)("strong",{parentName:"p"},"NULL"),", then the property (action) being added will not be displayed. Cannot be used together with the\xa0",(0,o.kt)("strong",{parentName:"p"},"HEADER")," option."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyExpression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"READONLYIF\xa0propertyExpression")),(0,o.kt)("p",null,"Specifies a property that allows or prohibits changing the property being added (or execution of the action being added). If the value of this property\xa0is\xa0",(0,o.kt)("strong",{parentName:"p"},"NULL"),",\xa0then the property being added will not be changeable, and the action being added will not be executable. The behavior is similar to the ",(0,o.kt)("strong",{parentName:"p"},"READONLY option"),", but with an additional data-dependant condition."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyExpression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"BACKGROUND\xa0propertyExpression")),(0,o.kt)("p",null,"Specifying a property that determines the background color for the value cell of the property (action) being added. The property may have the\xa0",(0,o.kt)("strong",{parentName:"p"},"COLOR"),"\xa0type (in this case, its value will be used) or any other type. In this case, if the value is not equal\xa0",(0,o.kt)("strong",{parentName:"p"},"NULL"),", then either the default color stored in the global property ",(0,o.kt)("strong",{parentName:"p"},"System.defaultBackgroundColor"),"\xa0(set in settings) or yellow color (if the default color is not set) will be used."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyExpression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"FOREGROUND\xa0propertyExpression")),(0,o.kt)("p",null,"Specifying\xa0a property that determines the text color for the value cell of the property (action) being added. The property may have the\xa0",(0,o.kt)("strong",{parentName:"p"},"COLOR"),"\xa0type (in this case, its value will be used) or any other type. In this case, if the value is not equal to\xa0",(0,o.kt)("strong",{parentName:"p"},"NULL"),", then either the default text color stored in the global property\xa0",(0,o.kt)("strong",{parentName:"p"},"System.defaultForegroundColor"),"\xa0(set in settings) or red color (if the default color is not set) will be used."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyExpression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HEADER\xa0propertyExpression")),(0,o.kt)("p",null,"Specifying a property that determines the header for the column of the property (action) being added. The return value of this property will be used as the header. If the return value is\xa0",(0,o.kt)("strong",{parentName:"p"},"NULL"),", then the added property (action) will be automatically hidden.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyExpression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"FOOTER\xa0propertyExpression")),(0,o.kt)("p",null,"Specifying a property\xa0that determines the footer of the property (action) being added. Used only in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Print_view"},"print view"),"\xa0of the form."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyExpression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"COLUMNS ","[","groupid","]","\xa0(groupName1, ..., groupNameM)")),(0,o.kt)("p",null,"Specifies the upper ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_structure#objects"},"object groups")," whose values will define a set of ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_structure#groupcolumns-broken"},"columns")," to display the added property (action). The\xa0",(0,o.kt)("strong",{parentName:"p"},"COLUMNS"),"\xa0option is often used with the\xa0",(0,o.kt)("strong",{parentName:"p"},"HEADER")," option which defines headers for these columns."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"groupid")),(0,o.kt)("p",null,"Column group ID. ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". If the ",(0,o.kt)("strong",{parentName:"p"},"COLUMNS")," option is specified for several properties (actions) being added with the same set of object groups, then by default the columns of the first property (action) will be added, followed by the columns of the second property (action), and so on. To group columns of different properties (actions) by values of the upper objects, you can set for them the same string ID of the group of columns. In this case, the columns for different properties (actions) will alternate.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"groupName1, ..., groupNameM")),(0,o.kt)("p",null,"List of the names of the upper\xa0object groups. Each name is defined ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"by a simple ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"DRAW groupObjectName")),(0,o.kt)("p",null,"Specifying the name of the object group on the form where the added property or action will be displayed in the table of the specified object group."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"groupObjectName")),(0,o.kt)("p",null,"Name of an object group. ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"viewType")),(0,o.kt)("p",null,"Specifying the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Interactive_view#property"},"view type")," of the property or action being added:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GRID")," \u2014 table column"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TOOLBAR")," \u2014 toolbar"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PANEL"),"\xa0\u2014 panel")),(0,o.kt)("p",null,"If not specified, the corresponding option from the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Property_options"},"property options")," is used. If it is also not specified, then the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Interactive_view#defaultPropertyView-broken"},"default view type")," is used for the display group of this property or action."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),(0,o.kt)("p",null,"Modifiers specifying that object operators (",(0,o.kt)("strong",{parentName:"p"},"NEW"),", ",(0,o.kt)("strong",{parentName:"p"},"EDIT"),", ",(0,o.kt)("strong",{parentName:"p"},"DELETE"),", ",(0,o.kt)("strong",{parentName:"p"},"NEWEDIT"),") must be executed in a new (nested) session."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"BEFORE formPropertyName")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"AFTER \xa0formPropertyName")),(0,o.kt)("p",null,"Specifying that a property or an action should be added to the form structure before (keyword ",(0,o.kt)("strong",{parentName:"p"},"BEFORE"),") or after (keyword ",(0,o.kt)("strong",{parentName:"p"},"AFTER"),") the previously added property or action. Typically used in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_extension"},"form extension")," concept."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"formPropertyName")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#name-broken"},"Property/action name on the form"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"QUICKFILTER\xa0formPropertyName")),(0,o.kt)("p",null,"Specifying the property to be used in ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_events#default"},"default handlers"),"\xa0for quick filtering."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"formPropertyName")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#name-broken"},"Property name/actions on the form"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ON eventType actionId(param1, ..., paramZ) |\xa0{ actionOperator }")),(0,o.kt)("p",null,"Specifying the action that will be executed when the specified ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Form_events"},"form event"),"\xa0occurs."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"eventType")),(0,o.kt)("p",null,"Type of form event. It is specified by one of the following keywords:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CHANGE")," \u2014 the user tries to change the value of the property being added (call the added action).\xa0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CHANGEWYS")," \u2014 the user tries to change the displayed value of the property. It is triggered when the user inserts a text into the added property (by pressing Ctrl + V or similarly).\xa0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GROUPCHANGE")," \u2014 the user tries\xa0to change the property value for all objects in the table (group change)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EDIT")," \u2014 the user tries to edit the object that represents the property value.**",(0,o.kt)("br",{parentName:"li"}),"**"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CONTEXTMENU"),"\xa0","[","caption","]"," is the event type which adds a menu item executing the specified action to the context menu of the property (action) on the form. You can also specify the caption for this menu item (as string literal). If it is not specified, then, by default, it will be the same as the action caption.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"caption")),(0,o.kt)("p",null,"Caption of the item in the context menu. ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". If the caption is not specified explicitly, then it will be the same as the caption of the action called upon the event."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"actionId")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"Action ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"param1, ..., paramZ")),(0,o.kt)("p",null,"List of action parameters. Each parameter is specified with the\xa0object name on the form.\xa0The object\xa0name, in turn, is specified with a\xa0simple ID."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"actionOperator")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent action operator"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ATTR")),(0,o.kt)("p",null,"Keyword. Used only in the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Structured_view#hierarchy"},"hierarchical")," view. Indicates that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When importing from XML, the data is imported from the tag attributes instead of the child tag."),(0,o.kt)("li",{parentName:"ul"},"When exporting to XML, the data is exported to the tag attributes instead of the child\xa0tag.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"EXTID extID")),(0,o.kt)("p",null,"Specifying the name to be used\xa0for ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Structured_view#extid"},"export/import"),"\xa0operations of this property. Used only in the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Structured_view"},"structured")," view."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"extId")),(0,o.kt)("p",null,"String literal."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"IN**\xa0**propertyGroup")),(0,o.kt)("p",null,"Specifying a\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Groups_of_properties_and_actions"},"property/action group")," which the property (action) on the form belongs to.\xa0If this option is not specified, then the property group of the property itself will be used as the property (action) group on the form.\xa0"),(0,o.kt)("p",null,"*",(0,o.kt)("em",{parentName:"p"},"propertyGroup"),"\xa0\u2013\xa0*the property group name.\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"Composite ID"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order;\ndate = DATA DATE (Order);\ntime = DATA TIME (Order);\nnumber = DATA INTEGER (Order);\nseries = DATA BPSTRING[2] (Order);\n\nnote = DATA ISTRING[255] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndate(OrderDetail d) = date(order(d));\n\nindex (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n\nsku = DATA Sku (OrderDetail);\nnameSku (OrderDetail d) = name(sku(d));\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[12,2] (OrderDetail);\n\nsum (Order o) = GROUP SUM sum(OrderDetail d) BY order(d);\n\nquantity (Order o, Sku s) = GROUP SUM quantity(OrderDetail d) BY order(d), sku(d);\nlastDetail (Order o, Sku s) = GROUP MAX OrderDetail d BY order(d), sku(d);\nchangeQuantity (Order o, Sku s)  {\n    INPUT n = NUMERIC[10,2] DO {\n        IF lastDetail(o, s) THEN {\n            IF n THEN\n                quantity(OrderDetail d) <- n WHERE d == lastDetail(o, s);\n            ELSE\n                DELETE OrderDetail d  WHERE d == lastDetail(o, s);\n        } ELSE IF n THEN {\n            NEW d = OrderDetail {\n                order(d) <- o;\n                sku(d) <- s;\n                quantity(d) <- n;\n            }\n        }\n    }\n}\n\nstopOrder = DATA BOOLEAN (Sku);\nonStock = DATA NUMERIC[10,2] (Sku);\nordered = DATA NUMERIC[10,2] (Sku);\n\nCLASS Customer;\nname = DATA ISTRING[100] (Customer);\nFORM customers\n    OBJECTS c = Customer\n    PROPERTIES(c) READONLY name\n    LIST Customer OBJECT c\n;\n\ncustomer = DATA Customer (Order);\nnameCustomer (Order o) = name(customer(o));\n\ncustomer(OrderDetail d) = customer(order(d));\n\nCLASS Region;\nname = DATA STRING[100] (Region);\n\nregion = DATA Region (Customer);\n\n// declaring the orders form\nFORM order 'Order'\n    OBJECTS o = Order PANEL // adding an order object to the form\n    PROPERTIES VALUE(o), // adding the order ID in the database\n               date(o), time(o), series(o), number(o), // adding properties date/time of order, series/order number\n               nameCustomer(o), // adding the name of the customer, which by default will be available for editing\n                                     // here, when the user tries to edit it, a dialog will be called for the customer choice - a form for which the LIST customer parameter is set\n               note(o), // adding a note\n               sum(o) READONLY // adding the order amount without the possibility of editing, since it is automatically calculated based on the sum of rows\n\n    OBJECTS d = OrderDetail // adding the order line object\n    PROPERTIES(d) // all properties in this block will have an order line input\n                  index READONLY, // adding the ordinal line number and making it impossible to edit\n                  nameSku, // adding a name\n                  quantity, price, sum, // adding quantity, price, amount\n                  NEW, // adding the predefined NEW action that adds a new order line\n                  DELETE // adding an action that will delete the order line\n    FILTERS order(d) == o // indicating that only lines related to this order should be shown\n\n    OBJECTS s = Sku // adding a sku object to which the totals for each sku in the order will be written\n    PROPERTIES(s) name READONLY // adding a name, while making a note that it cannot be edited on this form\n\n    PROPERTIES quantity(o, s) // adding a property that will display the ordered quantity by sku in this order\n               ON CHANGE changeQuantity(o, s) // by default, even though the property is not marked READONLY and nothing will happen when the user tries to change it, since quantity is an aggregated property\n                                                           // in this case, a note is made that when the user tries to change, the changeQuantity action will be called\n                                                           // an algorithm is written in this property that will create/delete order lines or change the quantity in them\n               READONLYIF stopOrder(s) // making the property unavailable for editing, if the order is prohibited for this sku\n               BACKGROUND stopOrder(s) // in addition, in this case, this cell is highlighted with custom background so that the user can see such positions in advance\n\n    EDIT Order OBJECT o // marking the form as a form for editing orders\n;\n\nEXTEND FORM order // expanding the form with the Mixin concept\n    PROPERTIES onStock(s) BEFORE quantity(d), // adding the property of the current balance to the form before the quantity in the order\n               ordered(s) BEFORE quantity(d) // adding to the form the quantity of already ordered products within all orders\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY VALUE, date, number // all properties in this block are unavailable for editing\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE // adding predefined NEW and EDIT actions that will call the order form to add orders\n;\n\n// creating a \"report\" in which orders for a certain interval will be visible in the context of customers in a particular region\nFORM orderReport 'Sales by warehouse'\n    OBJECTS interval = (dateFrom 'Date (from)' = DATE, dateTo 'Date (to)' = DATE) PANEL // declaring a group of objects, consisting of 2 objects of the Date class with the appropriate captions, which will always be displayed as a panel\n    PROPERTIES dateFrom = VALUE(dateFrom), dateTo = VALUE(dateTo) // adding to the form the properties of the date objects values, with which the user can select dates\n                                                                        // in addition, assigning to these properties on the form names dateFrom and dateTo, respectively\n\n    OBJECTS r = Region PANEL // adding a region object, by which customers will be filtered\n    PROPERTIES(r) name SELECTOR // adding the property region name, at the same time marking that when editing it, the dialog for choosing a region should be called, the selected value of which will be used as the current value\n\n    OBJECTS c = Customer // adding the customers object\n                         // specifically not adding a single property so that it is \"invisible\", but it is needed in order to display customers in columns\n    FILTERS region(c) == r // setting a filter so that customers are only from this region\n\n    OBJECTS s = Sku // adding a sku object, in the table of which basic information will be displayed\n    PROPERTIES(s) name READONLY // adding the sku name and making it READONLY, otherwise the user will be able to change the product names directly in the report\n\n    PROPERTIES = [ GROUP SUM quantity(OrderDetail d) IF date(d) >= dateFrom AND date(d) <= dateTo BY sku(d), customer(d)](s, c)\n                // adding a property in which the quantity of ordered sku by customers for a certain date interval is calculated\n               COLUMNS (c) // marking that customers should be displayed in columns, with the same number of columns as there will be rows in the customer object, taking into account filters, and they will be displayed in the same order\n               HEADER name(c) // setting that the name of the customer will be used as the column heading\n;\n")))}d.isMDXComponent=!0}}]);