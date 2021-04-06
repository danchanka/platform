(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(750)),c={title:"Object blocks"},p={unversionedId:"Object_blocks",id:"version-v4/Object_blocks",isDocsHomePage:!1,title:"Object blocks",description:"Object block of the FORM instruction\xa0 adds objects\xa0(including object groups)\xa0to the form structure, as well as object trees to the interactive form view.",source:"@site/versioned_docs/version-v4/Object_blocks.md",slug:"/Object_blocks",permalink:"/platform/docs/Object_blocks",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Object_blocks.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"FORM instruction: Overview",permalink:"/platform/docs/FORM_instruction"},next:{title:"Properties and actions block",permalink:"/platform/docs/Properties_and_actions_block"}},b=[{value:"Object block",id:"objects",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Object group options</em>",id:"object-group-options",children:[]},{value:"Examples",id:"examples",children:[]},{value:"<strong>Object tree block</strong>",id:"tree",children:[]},{value:"Syntax",id:"syntax-1",children:[]},{value:"Description",id:"description-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"<em>Object tree options</em>",id:"object-tree-options",children:[]},{value:"Examples",id:"examples-1",children:[]}],i={toc:b};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Object block of the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/FORM_instruction"},"FORM instruction"),"\xa0 adds ",Object(o.b)("a",{parentName:"p",href:"#objects"},"objects"),"\xa0(including object groups)\xa0to the form structure, as well as ",Object(o.b)("a",{parentName:"p",href:"#tree"},"object trees")," to the interactive form view."),Object(o.b)("h3",{id:"objects"},"Object block"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"OBJECTS\xa0groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]\n")),Object(o.b)("p",null,"Each ",Object(o.b)("em",{parentName:"p"},"groupDeclaration\xa0"),"is a declaration of an object group consisting of several objects:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[groupName =] (objectDeclaration1, ..., objectDeclarationK)\n")),Object(o.b)("p",null,"\xa0or an object group consisting of a single object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"objectDeclaration\n")),Object(o.b)("p",null,"Each ",Object(o.b)("em",{parentName:"p"},"objectDeclaration")," declaring an object has the following syntax:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]\n")),Object(o.b)("p",null,"The declaration of each object group may be followed by a set of options called ",Object(o.b)("em",{parentName:"p"},"groupOptions"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"viewType\nINIT | FIXED\nPAGESIZE pageSize \nAFTER groupName\nBEFORE groupName\ndefaultObjectsType\nIN propertyGroup\nEXTID extID\nSUBREPORT [subReportExpression]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"A single ",Object(o.b)("strong",{parentName:"p"},"OBJECTS")," block can contain several comma-delimited declarations of ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view#objects"},"object groups"),". An object group can contain just one object or\xa0several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses. The declaration of an object group may be followed by the options of this group. They are listed one after another in an arbitrary order."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,"Name of an object group. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#id-broken"},"Simple ID"),". Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Object name. Simple ID. Must be specified if the object class is a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Built-in_classes"},"built-in class"),".\xa0If the object class is a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/User_classes"},"custom class"),",\xa0the name doesn't need to be specified. In this case, it will be equal to the name of the class object.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"classId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#classid-broken"},"Object class ID"),"\xa0.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Caption of the object being added.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Literals#strliteral-broken"},"String literal"),". If the caption is not specified, the class caption will become the object caption."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ON CHANGE actionName(param1, ..., paramM) |\xa0{ actionOperator }")),Object(o.b)("p",null,"Specifying an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"action")," that will be called when the current object value is changed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionID")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#propertyid-broken"},"Action ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramM")),Object(o.b)("p",null,"A list of object names on the form that will be used as action parameters.\xa0The number of these objects must be equal to the number of action parameters.\xa0The name of the object is defined\xa0with a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#id-broken"},"simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/Action_operator#contextdependent"},"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."),Object(o.b)("h3",{id:"object-group-options"},Object(o.b)("em",{parentName:"h3"},"Object group options")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"viewType")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view#defaultPropertyView-broken"},"Default view")," for an object group. It is specified with one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PANEL"),"\xa0-\xa0",Object(o.b)("em",{parentName:"li"},"panel")," view."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOOLBAR")," - toolbar display mode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GRID*"),"\xa0-\xa0tablecolumn*\xa0 view;. Used by default.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"PAGESIZE")," pageSize"),Object(o.b)("p",null,"Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to 3","*","<number of visible rows in the table",">",". A value of 0 means that all objects must be read."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"pageSize")),Object(o.b)("p",null,"Number of objects read. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Literals#intliteral-broken"},"Integer literal"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"AFTER")," groupName"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"BEFORE")," groupName"),Object(o.b)("p",null,"Specifying that the object tree should be added to the form structure immediately before (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Form_extension"},"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"#groupName-broken"},"Object group name"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"defaultObjectsType")),Object(o.b)("p",null,"Specifying which object collection from the added\xa0object group will be current after the change of the active filters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FIRST"),"\u2013\xa0specifies that the first object collection will be the ",Object(o.b)("a",{parentName:"li",href:"/platform/docs/Interactive_view#defaultobject"},"default objects")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LAST")," - last one"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PREV")," - previous one")),Object(o.b)("p",null,"If this option is not specified, the platform determines the option to be used depending on the current filters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IN**\xa0**propertyGroup")),Object(o.b)("p",null,"Specifying the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Groups_of_properties_and_actions"},"property/action group")," that the object group belongs to. Used only in the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Structured_view#hierarchy"},"hierarchical"),"\xa0view."),Object(o.b)("p",null,"*",Object(o.b)("em",{parentName:"p"},"propertyGroup"),"\xa0\u2013\xa0*the property group name.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"EXTID extID")),Object(o.b)("p",null,"Specifying the name to be used\xa0for\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Structured_view#extid"},"export/import"),"\xa0operations performed by this object group. Used only\xa0in\xa0the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Structured_view"},"structured"),"\xa0view."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"extId")),Object(o.b)("p",null,"String\xa0literal."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SUBREPORT")),Object(o.b)("p",null,"Specifies that you need to generate a separate\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Print_view"},"report")," file for this object group while ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Print_view#buildhierarchy"},"building the report hierarchy"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"subReportExpression")),Object(o.b)("p",null,"The expression whose value will be used as the name of the \xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Print_view"},"report"),"\xa0file\xa0for the created\xa0object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Open_form#params"},"passed"),"\xa0when the form is opened\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/In_a_print_view_PRINT_"},"in the print view"),"\xa0(if it's not done, they will be considered equal\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shipment;\n// declaring the delivery form\nFORM shipments 'Deliveries'\n    OBJECTS s = Shipment // adding one object of the shipment class\n                        PAGESIZE 100 // indicating that the table should always contain 100 rows\n\n    // ... adding properties and filters to the form\n;\n\n// Declaring a form that will display the turnover of the product for a specified interval\nname = DATA STRING[100] (Item);\nrevenue = DATA NUMERIC[16,2] (Item, DATE, DATE);\n\nFORM revenues 'Product turnovers'\n    OBJECTS interval = (dateFrom 'Date (from)' = DATE, dateTo 'Date (to)' = DATE) PANEL, // declaring a group of objects, consisting of 2 objects of the Date class with the appropriate captions, which will always be displayed as a panel\n            i = Item // adding a list of products\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo) // adding to the form the properties of the date objects values, with which the user can select dates\n    PROPERTIES name(i), revenue(i, dateFrom, dateTo) // adding the product name and the property with the product turnover for the date interval\n;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// creating a form for printing a price tag for a product\nlabelFile = DATA STRING[100] (Item);\nprintLabelFile (Item i)= OVERRIDE labelFile(i), 'MyModule_printLabel_i.jrxml' IF i IS Item;\nFORM printLabel 'Price tag printing'\n    OBJECTS i = Item               // adding the product for which the price tag will be printed\n    REPORT printLabelFile(i)       // marking that a file whose name is stored in the printLabelFile property should be used as a template (it is assumed that the i value will be passed in the OBJECTS block)\n                                   // for example, the user can input myLabel1.jrxml there, then the system will use a file named myLabel1.jrxml\n//  ... other properties required for printing\n;\n")),Object(o.b)("h3",{id:"tree"},Object(o.b)("strong",{parentName:"h3"},"Object tree block")),Object(o.b)("h3",{id:"syntax-1"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"TREE [name] groupDeclaration1 [parentBlock1], ...., groupDeclarationN [parentBlockN] [treeOptions]\n")),Object(o.b)("p",null,"Each ",Object(o.b)("em",{parentName:"p"},"groupDeclaration")," is a declaration of an object group that is similar to the declaration in an object block described above. Each ",Object(o.b)("em",{parentName:"p"},"parentBlock")," can be described in one of the following ways:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"PARENT propertyId\n(PARENT propertyId1, ..., propertyIdK)\n")),Object(o.b)("p",null,"The first option is used if an object group for which the block is specified consists of a single object, the second one is used for groups of two and more objects."),Object(o.b)("p",null,"The tree",Object(o.b)("em",{parentName:"p"},"Options")," options set may be specified after the declaration of each object tree."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"AFTER groupName\nBEFORE groupName\n")),Object(o.b)("h3",{id:"description-1"},"Description"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Object tree block")," lets you create an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view#tree"},"object tree"),". The first specified object group will form a list of top-level objects, each of which will have a child list of objects of the second specified object group and so \xa0on."),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"PARENT")," block to create ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Interactive_view#treegroup-broken"},"hierarchical object groups"),". To do that, specify a property that will define the parent element for an object (or several objects if an object group contains several ones)."),Object(o.b)("h3",{id:"parameters-1"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"The name of the object tree being created",Object(o.b)("em",{parentName:"p"},"."),"\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#id-broken"},"Simple ID"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#propertyid-broken"},"ID of the property")," defining the hierarchy for an object group consisting of a single object. The specified property must have a single parameter and return the parent object of the passed object as its value (or ",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0 if the passed object is the top one)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdK")),Object(o.b)("p",null,"A list of property ID's defining the hierarchy for an object group consisting of several objects. All specified properties must have the same number of parameters as the number of objects in the object group. Each of these properties must return one of the parent objects of the passed objects as a value (or \xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0 if the passed object collection is the top one). The first property should return the first parent object, the second property - the second object, etc. \xa0on."),Object(o.b)("h3",{id:"object-tree-options"},Object(o.b)("em",{parentName:"h3"},"Object tree options")),Object(o.b)("p",null,"AFTER groupName"),Object(o.b)("p",null,"BEFORE groupName"),Object(o.b)("p",null,"Specifying that the object tree should be added to the form structure immediately before (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Form_extension"},"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"#groupName-broken"},"Object group name"),".\xa0"),Object(o.b)("h3",{id:"examples-1"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS SkuGroup;\nname = DATA ISTRING[100] (SkuGroup);\nactive = DATA BOOLEAN (SkuGroup);\nparent = DATA SkuGroup (SkuGroup) AUTOSET;\n\nCLASS Sku;\nname = DATA ISTRING[100] (Sku);\nskuGroup = DATA SkuGroup (Sku);\n\n\nFORM skus 'Sku'\n    TREE groupTree g=SkuGroup PARENT parent(g)\n    PROPERTIES READONLY name(g)\n    FILTERS active(g)\n\n    OBJECTS s = Sku\n    PROPERTIES(s) name\n    FILTERS skuGroup(s) == g\n;\n\nCLASS Group1;\nname = DATA STRING[100] (Group1);\n\nCLASS Group2;\nname = DATA STRING[100] (Group2);\n\nCLASS Group3;\nname = DATA STRING[100] (Group3);\n\nin = DATA BOOLEAN (Group1, Group2);\nin = DATA BOOLEAN (Group2, Group3);\n\nFORM groups\n    TREE groups g1 = Group1, g2 = Group2, g3 = Group3\n    PROPERTIES READONLY name(g1), name(g2), name(g3)\n    FILTERS in(g1, g2), in(g2, g3)\n;\n")))}l.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?n.a.createElement(d,p(p({ref:t},i),{},{components:r})):n.a.createElement(d,p({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);