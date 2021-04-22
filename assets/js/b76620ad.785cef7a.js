(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{557:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(747)),o={title:"In a print view (PRINT)"},s={unversionedId:"In_a_print_view_PRINT_",id:"In_a_print_view_PRINT_",isDocsHomePage:!1,title:"In a print view (PRINT)",description:"This operator creates an action that\xa0opens a form\xa0in the\xa0print\xa0view.",source:"@site/docs/In_a_print_view_PRINT_.md",slug:"/In_a_print_view_PRINT_",permalink:"/platform/next/In_a_print_view_PRINT_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/In_a_print_view_PRINT_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/platform/next/In_an_interactive_view_SHOW_DIALOG_"},next:{title:"In a structured view (EXPORT, IMPORT)",permalink:"/platform/next/In_a_structured_view_EXPORT_IMPORT_"}},p=[{value:"Format",id:"format",children:[]},{value:"Interactive print view",id:"interactive",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This operator creates an action that\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Open_form"},"opens a form"),"\xa0in the\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Print_view"},"print"),"\xa0view."),Object(i.b)("h3",{id:"format"},"Format"),Object(i.b)("p",null,"In this operator, you can specify the format that form data will be converted to before being shown to the user:\xa0\xa0",Object(i.b)("strong",{parentName:"p"},"DOC"),",\xa0",Object(i.b)("strong",{parentName:"p"},"DOCX"),",\xa0",Object(i.b)("strong",{parentName:"p"},"XLS"),",\xa0",Object(i.b)("strong",{parentName:"p"},"XLSX"),",\xa0",Object(i.b)("strong",{parentName:"p"},"PDF, HTML, RTF"),"."),Object(i.b)("p",null,"By default, if the format is specified in the print view, when the client receives a file in a specified format, it attempts to open this file using standard OS means (that is, using the program associated with the specified format). If necessary, however, in addition to the format, you can specify a property that will contain a file with the generated report. In this case, no data will be sent to the client and all data processing will be done exclusively on the server."),Object(i.b)("h3",{id:"interactive"},"Interactive print view"),Object(i.b)("p",null,"Apart from the export in a specified format, the print view allows to display information to the\xa0user in the following\xa0",Object(i.b)("em",{parentName:"p"},"interactive"),"\xa0modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\xa0PREVIEW"),"\xa0-\xa0the form on the client side will be shown in a new preview window, so that the user can decide on the format to export this form to or send it to the printer. This mode is used by default if other modes/formats are not defined."),Object(i.b)("li",{parentName:"ul"},"\xa0",Object(i.b)("strong",{parentName:"li"},"NOPREVIEW"),"\xa0-\xa0the form will be automatically sent to the printer. In this and the previous modes, you can specify a property that will be used for to determine the printer that will be used to print the form (if you don't do it, the default printer will be used)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"*\xa0***"),"MESSAGE** - the form will be shown as a message. In this case, it is assumed that the form consists of a single object group. Accordingly, the shown message consists of a header with all the properties having an ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Static_view#empty"},"empty"),"\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Form_structure#drawgroup-broken"},"display group"),", and a table in which rows are object collections of this only object group and columns are properties that are not displayed in the header (i.e. for which the display group exists and is equal to the only object group of the form being opened). The operator working in this mode is essentially a generalization of the ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Show_message_MESSAGE_ASK_"},"message display")," operator. It is worth noting that this operator mode is used in\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Constraints"},"constraints"),"\xa0(when the user is shown objects for which a constraint was violated).")),Object(i.b)("p",null,"Similarly to the\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_"},"interactive view"),", the interactive modes of the print view enable the developer to set options for \xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_#flow"},"flow management"),"\xa0and\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_#location"},"form location"),"\xa0(their behavior is identical to the corresponding options in the form opening operator in the interactive view)."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u0421urrent implementation: in the ",Object(i.b)("strong",{parentName:"p"},"MESSAGE"),' mode, the form is always shown as a window (the "asynchronous window" option is not supported in this case); in the asynchronous ',Object(i.b)("strong",{parentName:"p"},"PREVIEW")," mode the form is always shown as a tab; in the synchronous ",Object(i.b)("strong",{parentName:"p"},"PREVIEW")," mode - as a window. The ",Object(i.b)("strong",{parentName:"p"},"NOPREVIEW")," mode is always asynchronous and the form location in it does not make sense (since no forms are shown to the user directly)"))),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"To open the form in the print view,\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/PRINT_operator"},Object(i.b)("strong",{parentName:"a"},"PRINT"),"\xa0operator")," is used."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,b=m["".concat(o,".").concat(h)]||m[h]||d[h]||i;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);