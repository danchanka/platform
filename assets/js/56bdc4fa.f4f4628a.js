(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{310:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),o=(a(0),a(746)),i={title:"Navigator",sidebar_label:"Overview"},l={unversionedId:"Navigator",id:"version-v4/Navigator",isDocsHomePage:!1,title:"Navigator",description:"Navigator is a hierarchical structure (tree) consisting of navigator elements. There are three types of navigator elements:",source:"@site/versioned_docs/version-v4/Navigator.md",slug:"/Navigator",permalink:"/platform/Navigator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Navigator.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"In a structured view (EXPORT, IMPORT)",permalink:"/platform/In_a_structured_view_EXPORT_IMPORT_"},next:{title:"Navigator design",permalink:"/platform/Navigator_design"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Navigator")," is a hierarchical structure (tree) consisting of ",Object(o.b)("em",{parentName:"p"},"navigator elements"),". There are three types of navigator elements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"folder -\xa0"),"combines other navigator elements into a group. Selecting this element ",Object(o.b)("a",{parentName:"li",href:"/platform/Navigator_design#selectedfolder"},"affects")," the display of its children if they belong to another ",Object(o.b)("a",{parentName:"li",href:"/platform/Navigator_design"},"window"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"action"),"\xa0\u2013 executes\xa0a specified\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Actions"},"action"),". Only actions that take no arguments can be added to the navigator."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"form"),"\xa0\u2013\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/In_an_interactive_view_SHOW_DIALOG_"},"opens")," a specified\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Forms"},"form"),"\xa0in the interactive view and the ",Object(o.b)("a",{parentName:"li",href:"/platform/In_an_interactive_view_SHOW_DIALOG_#flow"},"asynchronous")," mode.")),Object(o.b)("p",null,"When an element is added to the navigator, a ",Object(o.b)("em",{parentName:"p"},"parent")," element is defined for it. The root element of the navigator is the ",Object(o.b)("strong",{parentName:"p"},"System.root")," folder.\xa0"),Object(o.b)("p",null,"If no navigator elements are displayed in a particular navigator folder, this folder is automatically hidden."),Object(o.b)("p",null,"Just as an ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view"},"interactive")," form view, the navigator is displayed in a 2D space: on the user's device screen. Therefore, it's ",Object(o.b)("a",{parentName:"p",href:"/platform/Navigator_design"},"design")," can/has to be defined, as well as for all other ",Object(o.b)("a",{parentName:"p",href:"/platform/Form_views#graphic"},"graphic")," views."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To manage the navigator use the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/NAVIGATOR_instruction"},Object(o.b)("strong",{parentName:"a"},"NAVIGATOR"),"\xa0instruction"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM items;\nFORM stocks;\nFORM legalEntities;\nFORM shipments;\nhello()  { MESSAGE 'Hello world'; }\nhi()  { MESSAGE 'Hi'; }\n\nNAVIGATOR {\n    NEW FOLDER catalogs 'Directories' WINDOW toolbar { // creating a new navigator folder and making all its descendants appear in a window with a vertical toolbar\n        NEW items; // creating a form element for the items form in the folder, the default element name is the form name\n    }\n    catalogs {  // navigator element editing instruction\n        NEW FORM stocksNavigator 'Warehouses' = stocks; // creating a stocksNavigator form element for the stocks form and adding the last element to the catalogs folder\n        NEW legalEntities AFTER items; // creating a form element named legalEntities in the catalogs folder right after the items element\n        NEW shipments;\n    }\n    NEW FOLDER documents 'Documents' WINDOW toolbar { // creating another folder, the elements of which will also be displayed in a window with a vertical toolbar\n                                                      // the folders themselves will be displayed in the root window, and when the user selects one of them in a window with a vertical\n                                                      // toolbar the descendants of this particular folder will be shown\n        NEW ACTION hi;   // creating an action element\n        NEW ACTION h=hello;   // creating an action element\n        MOVE shipments BEFORE h; // an instruction to move the shipments element from the catalogs folder to the document folder before the hello element\n    }\n}\n")))}m.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return a?r.a.createElement(b,l(l({ref:t},s),{},{components:a})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);