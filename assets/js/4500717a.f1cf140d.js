(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(751)),p={title:"SHOW operator"},c={unversionedId:"SHOW_operator",id:"SHOW_operator",isDocsHomePage:!1,title:"SHOW operator",description:"The SHOW\xa0operator creates an action that opens a form\xa0in interactive view.",source:"@site/docs/SHOW_operator.md",slug:"/SHOW_operator",permalink:"/platform/docs/next/SHOW_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/SHOW_operator.md",version:"current",sidebar:"docs",previous:{title:"SEEK operator",permalink:"/platform/docs/next/SEEK_operator"},next:{title:"TRY operator",permalink:"/platform/docs/next/TRY_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>SHOW operator options</em>",id:"show-operator-options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"SHOW"),"\xa0operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/In_an_interactive_view_SHOW_DIALOG_"},"opens a form"),"\xa0in interactive view.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SHOW name \n[OBJECTS objName1 = expr1 [NULL], ..., objNameN = exprN [NULL]]\n[formActionOptions]\xa0\n")),Object(o.b)("p",null,"When opening the list/edit form, the syntax is slightly different:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SHOW classFormType className\n= expr [NULL]\n[formActionOptions]\xa0\n\nformActionOptions\xa0is the options for this action. They can be added one by one in any order:\n\nsyncType\nwindowType\nMANAGESESSION | NOMANAGESESSION\nNEWSESSION | NESTEDSESSION\nCANCEL | NOCANCEL\nREADONLY\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"SHOW")," operator creates an action that opens the specified form.\xa0When opening the form in the\xa0",Object(o.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block,\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Open_form#params"},"initial values")," can be specified\xa0for ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Form_structure"},"Form structure"),"form objects."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Form name. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"classFormType")),Object(o.b)("p",null,"Keyword. Determines which form to open:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LIST"),"\xa0\u2013 list"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT"),"\xa0\u2013 edit")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the user class whose list/edit form is to be opened. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#cid-broken"},"Composite ID")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(o.b)("p",null,"Names of form objects for which initial values are specified. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#id-broken"},"Simple IDs"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr, expr1 ... exprN")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"Expressions")," which values determine the initial values for form objects."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"Specifies that the values passed may be\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"show-operator-options"},Object(o.b)("em",{parentName:"h3"},"SHOW operator options")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"syncType")),Object(o.b)("p",null,"Determines in which ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/In_an_interactive_view_SHOW_DIALOG_#flow"},"flow control")," mode the operator will work:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"WAIT"),"\xa0- synchronous. Used by default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0- asynchronous.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"windowType")),Object(o.b)("p",null,"Method of ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/In_an_interactive_view_SHOW_DIALOG_#location"},"the form layout"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DOCKED"),"\xa0\u2013 as a tab.\xa0Used by default in asynchronous mode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FLOAT"),"\xa0-\xa0as a window. Used by default in synchronous mode.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"MANAGESESSION"),"\xa0|\xa0",Object(o.b)("em",{parentName:"p"},"NOMANAGESESSION")),Object(o.b)("p",null,"Keyword. Determines whether or not the\xa0created form\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Interactive_view#owner"},"is considered to be the owner of the session"),"\xa0(if so, in interactive mode the corresponding buttons for managing the session will be shown on the form). By default, the platform tries to determine which mode to use ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Interactive_view#sysactions"},"automatically")," depending on the context."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CANCEL"),"\xa0|\xa0",Object(o.b)("em",{parentName:"p"},"NOCANCEL")),Object(o.b)("p",null,'Keyword. Determines whether or not to show the "Cancel" system action (',Object(o.b)("strong",{parentName:"p"},"System.formCancel"),")**\xa0**on the form.\xa0By default, the platform tries to\xa0determine which mode to use ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Interactive_view#sysactions"},"automatically"),"\xa0depending on context."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"READONLY")),Object(o.b)("p",null,"Keyword. If specified, the form is opened in ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/In_an_interactive_view_SHOW_DIALOG_#extra"},"read-only")," mode."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n")))}l.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=l(n),O=r,d=s["".concat(p,".").concat(O)]||s[O]||m[O]||o;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var b=2;b<o;b++)p[b]=n[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);