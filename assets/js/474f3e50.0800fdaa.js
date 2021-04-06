(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{269:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(750)),i={title:"Read file (READ)"},l={unversionedId:"Read_file_READ_",id:"version-v4/Read_file_READ_",isDocsHomePage:!1,title:"Read file (READ)",description:"The\xa0read file\xa0operator creates an\xa0action that reads a file from a defined source and writes this file to the specified local\xa0data\xa0property without parameters.",source:"@site/versioned_docs/version-v4/Read_file_READ_.md",slug:"/Read_file_READ_",permalink:"/platform/docs/Read_file_READ_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Read_file_READ_.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"File operators: Overview",permalink:"/platform/docs/File_operators"},next:{title:"Write file (WRITE)",permalink:"/platform/docs/Write_file_WRITE_"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("em",{parentName:"p"},"read")," ",Object(o.b)("em",{parentName:"p"},"file\xa0"),"operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"action")," that reads a file from a defined source and ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Property_change_CHANGE_"},"writes")," this file to the specified local\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Data_properties_DATA_"},"data"),"\xa0property without parameters."),Object(o.b)("p",null,"The source is defined as a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Properties"},"property")," which values are instances of ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Built-in_classes"},"string classes"),".\xa0The following types of data sources (URLs) are supported: FILE, HTTP, HTTPS, FTP, SFTP, JDBC, MDB."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that reads a file, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/READ_operator"},Object(o.b)("strong",{parentName:"a"},"READ")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n")))}s.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),u=n,m=f["".concat(i,".").concat(u)]||f[u]||d[u]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);