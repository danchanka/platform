(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[23865],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99330:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"READ operator"},p={unversionedId:"READ_operator",id:"READ_operator",isDocsHomePage:!1,title:"READ operator",description:"The\xa0READ\xa0operator creates an\xa0action that reads a file\xa0to a property from an external resource.*\xa0*",source:"@site/docs/READ_operator.md",sourceDirName:".",slug:"/READ_operator",permalink:"/platform/next/READ_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/READ_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"READ operator"},sidebar:"learn",previous:{title:"PRINT operator",permalink:"/platform/next/PRINT_operator"},next:{title:"REQUEST operator",permalink:"/platform/next/REQUEST_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("strong",{parentName:"p"},"READ"),"\xa0operator creates an\xa0",(0,a.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/platform/next/Read_file_READ_"},"reads a file"),"\xa0to a ",(0,a.kt)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," from an external resource.**\xa0**"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"READ [CLIENT [DIALOG]] urlExpr [TO propertyId]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("strong",{parentName:"p"},"READ"),"\xa0operator creates an action that reads a file from an external resource at the URL specified, and then writes the result file to the specified property."),(0,a.kt)("p",null,"The following URL types are supported:\xa0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),(0,a.kt)("p",null,"If the value of the property to which the file is written belongs to the ",(0,a.kt)("strong",{parentName:"p"},"FILE")," class, the file extension from the URL is also written to its value along with the file."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"CLIENT")),(0,a.kt)("p",null,"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"DIALOG")),(0,a.kt)("p",null,"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL",(0,a.kt)("em",{parentName:"p"},"."),"\xa0This can be used only when writing to the disk (the URL type is file).*\xa0* By default, the dialog is not shown.\xa0"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"urlExpr")),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," whose value is the URL from which to read. The value of the expression must be a string type."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"propertyId")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property")," to which read data\xa0should be written.\xa0This property\xa0must not have parameters and its value must be of a file class (",(0,a.kt)("strong",{parentName:"p"},"FILE"),",\xa0",(0,a.kt)("strong",{parentName:"p"},"RAWFILE"),",\xa0",(0,a.kt)("strong",{parentName:"p"},"JSONFILE"),",\xa0etc.).\xa0If this property is not specified, the\xa0",(0,a.kt)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n")))}c.isMDXComponent=!0}}]);