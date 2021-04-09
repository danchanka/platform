(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{366:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(746)),p={title:"PRINT operator"},i={unversionedId:"PRINT_operator",id:"PRINT_operator",isDocsHomePage:!1,title:"PRINT operator",description:"The PRINT\xa0operator creates an\xa0action\xa0that opens a form\xa0in print view.",source:"@site/docs/PRINT_operator.md",slug:"/PRINT_operator",permalink:"/platform/next/PRINT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/PRINT_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"NEWTHREAD operator",permalink:"/platform/next/NEWTHREAD_operator"},next:{title:"READ operator",permalink:"/platform/next/READ_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Additional options</em>",id:"additional-options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRINT"),"\xa0operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action"),"\xa0that ",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_print_view_PRINT_"},"opens a form"),"\xa0in print view.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"PRINT name \n[OBJECTS objName1 = expr1, ..., objNameN = exprN]\n[formActionOptions]\xa0\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formActionOptions")," -\xa0additional options for this action. There are several possible option syntaxes in this operator:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"printFormat [SHEET sheetProperty] [PASSWORD passwordExpr] [TO propertyId]\n[PREVIEW | NOPREVIEW] [syncType] [TO printerExpr]\nMESSAGE [syncType] [TOP n]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRINT"),"\xa0operator creates an action that prints the specified form. When printing a form\xa0in the\xa0",Object(o.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block you can add ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Open_form#params"},"additional filters")," for form objects\xa0to check these objects for equality to the values\xa0passed."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Form name.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(o.b)("p",null,"Names of form objects for which additional filters are specified. ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple IDs"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1 ... exprN")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects."),Object(o.b)("h3",{id:"additional-options"},Object(o.b)("em",{parentName:"h3"},"Additional options")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"printFormat")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_print_view_PRINT_#format"},"print format")," is specified by one of these keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PDF"),"\xa0\u2013 the form will be exported to a PDF file."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"XLS"),",\xa0",Object(o.b)("strong",{parentName:"li"},"XLSX"),"\xa0\u2013 the form will be exported to a file in one of the specified EXCEL formats."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DOC"),", ",Object(o.b)("strong",{parentName:"li"},"DOCX"),"\xa0\u2013 the form will be exported to a file in one of the specified WORD formats."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RTF"),"\xa0\u2013 the form will be exported to an RTF file."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"HTML"),"\xa0\u2013 the form will be exported to an HTML file.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sheetProperty\n")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property")," whose value is used as the name of the sheet in the exported file. The property must not have parameters.\xa0It is used for ",Object(o.b)("strong",{parentName:"p"},"XLS")," and ",Object(o.b)("strong",{parentName:"p"},"XLSX")," print formats."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"passwordExpr")),Object(o.b)("p",null,"An expression whose value determines the password that sets the read-only mode for the exported file. Used for\xa0",Object(o.b)("strong",{parentName:"p"},"XLS"),"\xa0and\xa0",Object(o.b)("strong",{parentName:"p"},"XLSX")," print formats."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"Property ID")," to which the generated file will be written. The property must not have parameters. If a property is not specified, the generated file is sent to the client and opened by the operating system"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"PREVIEW")),Object(o.b)("p",null,"Keyword. If specified, the form is displayed in ",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_print_view_PRINT_#interactive"},"preview")," mode.\xa0This mode is used by default if no other modes/formats are specified."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NOPREVIEW")),Object(o.b)("p",null,"Keyword. If specified, the form is immediately (without preview) sent for printing."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"printerExpr")),Object(o.b)("p",null,"An expression whose value determines the name of the printer to which the print job will be sent. If no printer with the specified name is found (or specified), the default printer is selected."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"MESSAGE")),Object(o.b)("p",null,"Keyword. If specified, the form displays data to the user in ",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_a_print_view_PRINT_#interactive"},"message")," mode."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TOP n")),Object(o.b)("p",null,"Displays only the first N entries. ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#intliteral-broken"},"Integer literal"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"syncType")),Object(o.b)("p",null,"Determines when the created action should be continued:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"WAIT"),"\xa0- after the client completes the action (closes the preview/message form). Used by default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0-\xa0after preparation of the information for sending to the client (form data is read).")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n")))}b.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(r),f=n,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return r?a.a.createElement(d,i(i({ref:t},c),{},{components:r})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);