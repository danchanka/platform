(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(751)),i={title:"READ operator"},p={unversionedId:"READ_operator",id:"READ_operator",isDocsHomePage:!1,title:"READ operator",description:"The\xa0READ\xa0operator creates an\xa0action that reads a file\xa0to a property from an external resource.*\xa0*",source:"@site/docs/READ_operator.md",slug:"/READ_operator",permalink:"/platform/docs/next/READ_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/READ_operator.md",version:"current",sidebar:"docs",previous:{title:"PRINT operator",permalink:"/platform/docs/next/PRINT_operator"},next:{title:"REQUEST operator",permalink:"/platform/docs/next/REQUEST_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"READ"),"\xa0operator creates an\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Read_file_READ_"},"reads a file"),"\xa0to a ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property")," from an external resource.**\xa0**"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"READ [CLIENT [DIALOG]] urlExpr [TO propertyId]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"READ"),"\xa0operator creates an action that reads a file from an external resource at the URL specified, and then writes the result file to the specified property."),Object(a.b)("p",null,"The following URL types are supported:\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),Object(a.b)("p",null,"If the value of the property to which the file is written belongs to the ",Object(a.b)("strong",{parentName:"p"},"FILE")," class, the file extension from the URL is also written to its value along with the file."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CLIENT")),Object(a.b)("p",null,"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"DIALOG")),Object(a.b)("p",null,"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL",Object(a.b)("em",{parentName:"p"},"."),"\xa0This can be used only when writing to the disk (the URL type is file).*\xa0* By default, the dialog is not shown.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"urlExpr")),Object(a.b)("p",null,"An ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," whose value is the URL from which to read. The value of the expression must be a string type."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#propertyid-broken"},"ID of the property")," to which read data\xa0should be written.\xa0This property\xa0must not have parameters and its value must be of a file class (",Object(a.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(a.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(a.b)("strong",{parentName:"p"},"JSONFILE"),",\xa0etc.).\xa0If this property is not specified, the\xa0",Object(a.b)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n")))}s.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=n,d=f["".concat(i,".").concat(u)]||f[u]||b[u]||a;return r?o.a.createElement(d,p(p({ref:t},c),{},{components:r})):o.a.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);