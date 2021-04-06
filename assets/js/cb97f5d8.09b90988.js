(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{612:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"Write file (WRITE)"},c={unversionedId:"Write_file_WRITE_",id:"Write_file_WRITE_",isDocsHomePage:!1,title:"Write file (WRITE)",description:"The\xa0write file operator creates an\xa0action which reads a file from the value of some property and saves it to the defined source.",source:"@site/docs/Write_file_WRITE_.md",slug:"/Write_file_WRITE_",permalink:"/platform/next/Write_file_WRITE_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Write_file_WRITE_.md",version:"current",sidebar:"learn",previous:{title:"Read file (READ)",permalink:"/platform/next/Read_file_READ_"},next:{title:"Data import (IMPORT)",permalink:"/platform/next/Data_import_IMPORT_"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("em",{parentName:"p"},"write file")," operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," which reads a file from the value of some property and saves it to the defined source."),Object(o.b)("p",null,"The source is set as a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," whose values are instances of\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"string classes"),".\xa0The following types of data sources (URLs) are supported:\xa0",Object(o.b)("strong",{parentName:"p"},"FILE"),", ",Object(o.b)("strong",{parentName:"p"},"FTP"),", ",Object(o.b)("strong",{parentName:"p"},"SFTP")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that writes a file, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/WRITE_operator"},Object(o.b)("strong",{parentName:"a"},"WRITE")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"loadAndWrite ()  {\n    INPUT f = FILE DO {\n        WRITE f TO 'file:///home/user/loadedfile.csv' APPEND;\n        WRITE CLIENT f TO '/home/user/loadedfile.txt';\n        WRITE CLIENT DIALOG f TO 'loadedfile';\n    }\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=n,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);