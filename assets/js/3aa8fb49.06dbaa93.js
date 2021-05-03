(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[53199],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=m(r),c=a,N=f["".concat(l,".").concat(c)]||f[c]||d[c]||i;return r?n.createElement(N,p(p({ref:t},s),{},{components:r})):n.createElement(N,p({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<i;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19493:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return l},default:function(){return s}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),p={title:"PRINT operator"},o={unversionedId:"PRINT_operator",id:"version-v4/PRINT_operator",isDocsHomePage:!1,title:"PRINT operator",description:"The PRINT operator creates an action that opens a form in print view.",source:"@site/versioned_docs/version-v4/PRINT_operator.md",sourceDirName:".",slug:"/PRINT_operator",permalink:"/platform/PRINT_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/PRINT_operator.md",version:"v4",lastUpdatedAt:1619608937,formattedLastUpdatedAt:"4/28/2021",frontMatter:{title:"PRINT operator"},sidebar:"version-v4/learn",previous:{title:"NEWTHREAD operator",permalink:"/platform/NEWTHREAD_operator"},next:{title:"READ operator",permalink:"/platform/READ_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PRINT")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/platform/Actions"},"action")," that ",(0,i.kt)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_"},"opens a form")," in print view. "),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PRINT name \n[OBJECTS objName1 = expr1, ..., objNameN = exprN]\n[formActionOptions] \n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"formActionOptions")," - additional options for this action. There are several possible option syntaxes in this operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"printFormat [SHEET sheetProperty] [PASSWORD passwordExpr] [TO propertyId]\n[PREVIEW | NOPREVIEW] [syncType] [TO printerExpr]\nMESSAGE [syncType] [TOP n]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PRINT")," operator creates an action that prints the specified form. When printing a form in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block you can add ",(0,i.kt)("a",{parentName:"p",href:"/platform/Open_form#params"},"additional filters")," for form objects to check these objects for equality to the values passed."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Form name. ",(0,i.kt)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objName1 ... objNameN")),(0,i.kt)("p",{parentName:"li"},"  Names of form objects for which additional filters are specified. ",(0,i.kt)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple IDs"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expr1 ... exprN")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/platform/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects."))),(0,i.kt)("h4",{id:"additional-options"},"Additional options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"printFormat")),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_#format"},"print format")," is specified by one of these keywords:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PDF")," \u2013 the form will be exported to a PDF file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XLS"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"XLSX")," \u2013 the form will be exported to a file in one of the specified EXCEL formats."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DOCX")," \u2013 the form will be exported to a file in one of the specified WORD formats."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RTF")," \u2013 the form will be exported to an RTF file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," \u2013 the form will be exported to an HTML file."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sheetProperty")),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property")," whose value is used as the name of the sheet in the exported file. The property must not have parameters. It is used for ",(0,i.kt)("inlineCode",{parentName:"p"},"XLS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"XLSX")," print formats.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"passwordExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value determines the password that sets the read-only mode for the exported file. Used for ",(0,i.kt)("inlineCode",{parentName:"p"},"XLS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"XLSX")," print formats.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"Property ID")," to which the generated file will be written. The property must not have parameters. If a property is not specified, the generated file is sent to the client and opened by the operating system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PREVIEW")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the form is displayed in ",(0,i.kt)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_#interactive"},"preview")," mode. This mode is used by default if no other modes/formats are specified.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NOPREVIEW")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the form is immediately (without preview) sent for printing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"printerExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value determines the name of the printer to which the print job will be sent. If no printer with the specified name is found (or specified), the default printer is selected.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MESSAGE")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the form displays data to the user in ",(0,i.kt)("a",{parentName:"p",href:"/platform/In_a_print_view_PRINT_#interactive"},"message")," mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TOP n")),(0,i.kt)("p",{parentName:"li"},"  Displays only the first ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," entries. ",(0,i.kt)("a",{parentName:"p",href:"/platform/Literals#intliteral-broken"},"Integer literal"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"syncType")),(0,i.kt)("p",{parentName:"li"},"  Determines when the created action should be continued:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WAIT")," - after the client completes the action (closes the preview/message form). Used by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NOWAIT")," - after preparation of the information for sending to the client (form data is read).")))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n")))}s.isMDXComponent=!0}}]);