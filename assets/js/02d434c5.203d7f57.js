(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),h=a,d=p["".concat(o,".").concat(h)]||p[h]||b[h]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(747)),o={title:"NAVIGATOR instruction"},c={unversionedId:"NAVIGATOR_instruction",id:"NAVIGATOR_instruction",isDocsHomePage:!1,title:"NAVIGATOR instruction",description:"The NAVIGATOR\xa0 instruction is used to modify the\xa0navigator.",source:"@site/docs/NAVIGATOR_instruction.md",slug:"/NAVIGATOR_instruction",permalink:"/platform/next/NAVIGATOR_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/NAVIGATOR_instruction.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"DESIGN instruction",permalink:"/platform/next/DESIGN_instruction"},next:{title:"WINDOW instruction",permalink:"/platform/next/WINDOW_instruction"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"NAVIGATOR"),"\xa0 instruction is used to modify the\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Navigator"},"navigator"),"."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"The syntax consists of nested blocks of ",Object(i.b)("em",{parentName:"p"},"navigator instructions."),"\xa0The outer instruction block is described after the keyword\xa0",Object(i.b)("strong",{parentName:"p"},"NAVIGATOR"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"NAVIGATOR {\n    navigatorStatement1 \n    ...\n    navigatorStatementN\n}\n")),Object(i.b)("p",null,"Each ",Object(i.b)("em",{parentName:"p"},"navigatorStatement")," describes a single navigator instruction, and at the end it may contain a nested block of additional navigator instructions.\xa0There are three types of navigator instructions: \xa0"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"NEW elementDescription [options] [{ ... }];\nMOVE name [caption] [options] [{ ... }];\nname [caption] [options] [{ ... }];\n")),Object(i.b)("p",null,"where ",Object(i.b)("em",{parentName:"p"},"elementDescription"),"\xa0in the ",Object(i.b)("strong",{parentName:"p"},"NEW")," instruction describes the type of element to be created, and can be in one of three types:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"FOLDER name [caption] \nFORM [name [caption] =] formName\nACTION [name [caption] =] actionName\n[name [caption] =] formElseActionName\n")),Object(i.b)("p",null,"A navigator instruction must end with a semicolon if it does not contain a nested block of additional instructions."),Object(i.b)("p",null,"The options for the ",Object(i.b)("em",{parentName:"p"},"options")," navigator element can be listed one after the other in arbitrary order. The following set of options is supported:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"WINDOW windowName\nBEFORE elementName\nAFTER elementName\nFIRST \nIMAGE fileName\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The\xa0",Object(i.b)("strong",{parentName:"p"},"NAVIGATOR"),"\xa0instruction allows to modify the navigator. Each navigator instruction block enclosed in braces allows to change the descendants of a particular\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Navigator"},"navigator element"),", which we will call the ",Object(i.b)("em",{parentName:"p"},"current")," element. In the outer block that follows the ",Object(i.b)("strong",{parentName:"p"},"NAVIGATOR")," keyword, the current element is the root system folder\xa0",Object(i.b)("strong",{parentName:"p"},"System.root"),".\xa0There are three types of navigator instructions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("em",{parentName:"li"},"create instruction")," (",Object(i.b)("strong",{parentName:"li"},"NEW"),") allows to create a new navigator element, making it a child object of the current element. The created navigator elements can be of three types: folder, form element, and action element. The type of element to be created is specified by the keywords\xa0",Object(i.b)("strong",{parentName:"li"},"FOLDER"),",\xa0",Object(i.b)("strong",{parentName:"li"},"FORM, and ACTION"),". When creating a form element, the keyword ",Object(i.b)("strong",{parentName:"li"},"FORM")," is optional. The navigator instruction block contained in this instruction (if any) describes the descendants of the element being created."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("em",{parentName:"li"},"move instruction")," (",Object(i.b)("strong",{parentName:"li"},"MOVE"),")**\xa0**allows to move an existing element to the current navigator element, making it a child element. Prior to this, the navigator element being moved is deleted from its previous location.\xa0The navigator instruction block contained in this instruction describes the descendants of the element being added.\xa0"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("em",{parentName:"li"},"modify instruction")," allows to change the specified navigator element, which must be a descendant (not necessarily a child) of the current element. The navigator instruction block contained in this instruction describes the descendants of the specified element.")),Object(i.b)("p",null,"The move and modify instructions allow to change the caption and options of a navigator item."),Object(i.b)("p",null,"The hierarchy described within a single ",Object(i.b)("strong",{parentName:"p"},"NAVIGATOR")," instruction can have an arbitrary nesting level and describe any number of elements at each level."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"name")),Object(i.b)("p",null,"Navigator element name. In the create instruction,\xa0it is ",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"a simple ID"),"\xa0and must be unique within the current ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Naming#namespace"},"namespace"),", while in the rest of the instructions it is a\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"composite ID"),". The name does not have to be specified when creating a form element or action element. Here the form name or action name is used as the element name."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"caption")),Object(i.b)("p",null,"Navigator element caption. ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". In the create instruction, if the caption is not specified, the caption will be the name of the created element. In the rest of the instructions it modifies the existing caption."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"actionName")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"action ID")," for which the navigator element will be created. The action must not take any parameters."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"formName")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"form ID")," for which the navigator element will be created."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"formElseActionName")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"form or action ID")," for which the navigator element will be created. It is initially assumed that in ",Object(i.b)("em",{parentName:"p"},"formElseActionName\xa0"),"a form is specified, and that only if it is not found an action is specified in",Object(i.b)("em",{parentName:"p"},"formElseActionName\xa0"),"\xa0The action must not take any parameters."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"*Element options\xa0"),"(options)*"),Object(i.b)("p",null,"WINDOW windowName"),Object(i.b)("p",null,"Specifying a ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Navigator_design"},"window")," in which the element and its descendants will be displayed (unless another window is specified for them).\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"windowName")),Object(i.b)("p",null,"Window name. Composite ID."),Object(i.b)("p",null,"BEFORE elementName"),Object(i.b)("p",null,"AFTER\xa0elementName\xa0"),Object(i.b)("p",null,"Specifying that the element must be added or moved before (keyword ",Object(i.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword ",Object(i.b)("strong",{parentName:"p"},"AFTER"),") the specified navigator element. The specified element must be a child of the current element. If the option is specified in the modify instruction, then the element itself must also be a child of the current element. Otherwise, the ",Object(i.b)("strong",{parentName:"p"},"MOVE")," instruction should be used."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"elementName")),Object(i.b)("p",null,"Navigator element name. Composite ID.\xa0"),Object(i.b)("p",null,"FIRST"),Object(i.b)("p",null,"A keyword that specifies that the element must be added or moved to first place in the child list of the current element.\xa0If the option is specified in the modify instruction, then the element itself must also be a child of the current element. Otherwise, the\xa0",Object(i.b)("strong",{parentName:"p"},"MOVE")," instruction should be used."),Object(i.b)("p",null,"IMAGE fileName"),Object(i.b)("p",null,"Specifying the relative path to the file with the image to be displayed as the icon for the navigator element.\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"fileName")),Object(i.b)("p",null,"Path to the file. String literal.\xa0The path is relative to the\xa0 ",Object(i.b)("strong",{parentName:"p"},"images")," directory."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"FORM items;\nFORM stocks;\nFORM legalEntities;\nFORM shipments;\nhello()  { MESSAGE 'Hello world'; }\nhi()  { MESSAGE 'Hi'; }\n\nNAVIGATOR {\n    NEW FOLDER catalogs 'Directories' WINDOW toolbar { // creating a new navigator folder and making all its descendants appear in a window with a vertical toolbar\n        NEW items; // creating a form element for the items form in the folder, the default element name is the form name\n    }\n    catalogs {  // navigator element editing instruction\n        NEW FORM stocksNavigator 'Warehouses' = stocks; // creating a stocksNavigator form element for the stocks form and adding the last element to the catalogs folder\n        NEW legalEntities AFTER items; // creating a form element named legalEntities in the catalogs folder right after the items element\n        NEW shipments;\n    }\n    NEW FOLDER documents 'Documents' WINDOW toolbar { // creating another folder, the elements of which will also be displayed in a window with a vertical toolbar\n                                                      // the folders themselves will be displayed in the root window, and when the user selects one of them in a window with a vertical\n                                                      // toolbar the descendants of this particular folder will be shown\n        NEW ACTION hi;   // creating an action element\n        NEW ACTION h=hello;   // creating an action element\n        MOVE shipments BEFORE h; // an instruction to move the shipments element from the catalogs folder to the document folder before the hello element\n    }\n}\n")))}m.isMDXComponent=!0}}]);