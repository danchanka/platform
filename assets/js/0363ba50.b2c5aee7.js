(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{750:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return n?a.a.createElement(m,b(b({ref:t},i),{},{components:n})):a.a.createElement(m,b({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(750)),o={title:"WRITE operator"},b={unversionedId:"WRITE_operator",id:"WRITE_operator",isDocsHomePage:!1,title:"WRITE operator",description:"The WRITE operator creates an action that writes a file\xa0from a property to an external resource.",source:"@site/docs/WRITE_operator.md",slug:"/WRITE_operator",permalink:"/platform/docs/next/WRITE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/WRITE_operator.md",version:"current",sidebar:"docs",previous:{title:"WHILE operator",permalink:"/platform/docs/next/WHILE_operator"},next:{title:"Action options",permalink:"/platform/docs/next/Action_options"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>fileExpr</em>",id:"fileexpr",children:[]},{value:"<strong>Examples</strong>",id:"examples",children:[]}],i={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"WRITE")," operator creates an ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Write_file_WRITE_"},"writes a file"),"\xa0from a property to an external resource.\xa0"),Object(l.b)("h3",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"WRITE [CLIENT [DIALOG]] fileExpr TO urlExpr [APPEND]\n")),Object(l.b)("h3",{id:"description"},"Description"),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"WRITE"),"\xa0 operator creates an action that writes a file from the property to an external resource located at the specified URL."),Object(l.b)("p",null,"The following URL types are supported:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),Object(l.b)("p",null,"It is assumed that the file extension\xa0is not specified in the URL (that is, the period (.) is also considered a part of the file name). This extension is determined automatically based on the class of the file\xa0being written:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("p",null,"Extension")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("p",null,"Class")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"read from the passed object"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"FILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"json"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"JSONFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"xml"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"XMLFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"csv"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"CSVFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"xls or xlsx, depending on the file content"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"EXCELFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dbf"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"DBFFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"table"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"TABLEFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"html"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"HTMLFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"doc or docx, depending on the file content"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"WORDFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jpg"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"IMAGEFILE"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pdf"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",null,"PDFFILE"))))),Object(l.b)("p",null,"The Downloads folder in the user folder is considered to be the current folder on the client side."),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"CLIENT")),Object(l.b)("p",null,"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"DIALOG")),Object(l.b)("p",null,"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL*",Object(l.b)("strong",{parentName:"p"},"*.**"),"\xa0This can be used only when writing to the disk (the URL type is file).*",Object(l.b)("strong",{parentName:"p"},"*\xa0**")," By default, the dialog is not shown.\xa0"),Object(l.b)("p",null,"*",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"ulrExpr")),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"})),Object(l.b)("p",null,"An ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," whose value equals to the URL."),Object(l.b)("h3",{id:"fileexpr"},Object(l.b)("em",{parentName:"h3"},"fileExpr")),Object(l.b)("p",null,"An ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," whose value equals to the file that will be written to an external resource.\xa0"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"APPEND")),Object(l.b)("p",null,"Keyword. If specified, the file is re-read from \xa0fileExpr\xa0and appended to the file at\xa0urlExpr;. For the CSV extension, data is added to the end of the file. For xls and xlsx\xa0, all sheets from the\xa0fileExpr\xa0file are copied to the\xa0file at the specified location\xa0urlExpr. Not supported for other extensions.\xa0By default, the file is rewritten."),Object(l.b)("h3",{id:"examples"},Object(l.b)("strong",{parentName:"h3"},"Examples")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"loadAndWrite ()  {\n    INPUT f = FILE DO {\n        WRITE f TO 'file:///home/user/loadedfile.csv' APPEND;\n        WRITE CLIENT f TO '/home/user/loadedfile.txt';\n        WRITE CLIENT DIALOG f TO 'loadedfile';\n    }\n}\n")))}p.isMDXComponent=!0}}]);