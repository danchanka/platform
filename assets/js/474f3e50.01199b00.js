(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[68483],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),f=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=f(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var f=2;f<o;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71971:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Read file (READ)"},l={unversionedId:"Read_file_READ_",id:"version-v4/Read_file_READ_",isDocsHomePage:!1,title:"Read file (READ)",description:"The read file operator creates an action that reads a file from a defined source and writes this file to the specified local data property without parameters.",source:"@site/versioned_docs/version-v4/Read_file_READ_.md",sourceDirName:".",slug:"/Read_file_READ_",permalink:"/platform/Read_file_READ_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Read_file_READ_.md",version:"v4",lastUpdatedAt:1620216094,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"Read file (READ)"},sidebar:"version-v4/learn",previous:{title:"File operators",permalink:"/platform/File_operators"},next:{title:"Write file (WRITE)",permalink:"/platform/Write_file_WRITE_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],f={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"read file")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/platform/Actions"},"action")," that reads a file from a defined source and ",(0,o.kt)("a",{parentName:"p",href:"/platform/Property_change_CHANGE_"},"writes")," this file to the specified local ",(0,o.kt)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"data")," property without parameters."),(0,o.kt)("p",null,"The source is defined as a ",(0,o.kt)("a",{parentName:"p",href:"/platform/Properties"},"property")," which values are instances of ",(0,o.kt)("a",{parentName:"p",href:"/platform/Built-in_classes"},"string classes"),". The following types of data sources (URLs) are supported: FILE, HTTP, HTTPS, FTP, SFTP, JDBC, MDB."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that reads a file, use the ",(0,o.kt)("a",{parentName:"p",href:"/platform/READ_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"READ")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n")))}s.isMDXComponent=!0}}]);