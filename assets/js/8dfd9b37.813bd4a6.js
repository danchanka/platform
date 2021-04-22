(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{449:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"READ operator"},p={unversionedId:"READ_operator",id:"version-v4/READ_operator",isDocsHomePage:!1,title:"READ operator",description:"The READ operator creates an action that reads a file to a property from an external resource.* *",source:"@site/versioned_docs/version-v4/READ_operator.md",slug:"/READ_operator",permalink:"/platform/READ_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/READ_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"PRINT operator",permalink:"/platform/PRINT_operator"},next:{title:"REQUEST operator",permalink:"/platform/REQUEST_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"READ")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/Read_file_READ_"},"reads a file")," to a ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," from an external resource.** **"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"READ [CLIENT [DIALOG]] urlExpr [TO propertyId]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"READ")," operator creates an action that reads a file from an external resource at the URL specified, and then writes the result file to the specified property."),Object(o.b)("p",null,"The following URL types are supported: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),Object(o.b)("p",null,"If the value of the property to which the file is written belongs to the ",Object(o.b)("strong",{parentName:"p"},"FILE")," class, the file extension from the URL is also written to its value along with the file."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CLIENT")),Object(o.b)("p",null,"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DIALOG")),Object(o.b)("p",null,"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL",Object(o.b)("em",{parentName:"p"},".")," This can be used only when writing to the disk (the URL type is file).* * By default, the dialog is not shown. "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"urlExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," whose value is the URL from which to read. The value of the expression must be a string type."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property")," to which read data should be written. This property must not have parameters and its value must be of a file class (",Object(o.b)("strong",{parentName:"p"},"FILE"),", ",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),", ",Object(o.b)("strong",{parentName:"p"},"JSONFILE"),", etc.). If this property is not specified, the ",Object(o.b)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},f=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=n,m=f["".concat(i,".").concat(u)]||f[u]||b[u]||o;return r?a.a.createElement(m,p(p({ref:t},c),{},{components:r})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);