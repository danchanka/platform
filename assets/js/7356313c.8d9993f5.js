(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[45245],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44279:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Write file (WRITE)"},l={unversionedId:"Write_file_WRITE_",id:"version-v4/Write_file_WRITE_",isDocsHomePage:!1,title:"Write file (WRITE)",description:"The write file operator creates an action which reads a file from the value of some property and saves it to the defined source.",source:"@site/versioned_docs/version-v4/Write_file_WRITE_.md",sourceDirName:".",slug:"/Write_file_WRITE_",permalink:"/platform/Write_file_WRITE_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Write_file_WRITE_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"Write file (WRITE)"},sidebar:"version-v4/learn",previous:{title:"Read file (READ)",permalink:"/platform/Read_file_READ_"},next:{title:"Data import (IMPORT)",permalink:"/platform/Data_import_IMPORT_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"write file")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/platform/Actions"},"action")," which reads a file from the value of some property and saves it to the defined source."),(0,o.kt)("p",null,"The source is set as a ",(0,o.kt)("a",{parentName:"p",href:"/platform/Properties"},"property")," whose values are instances of ",(0,o.kt)("a",{parentName:"p",href:"/platform/Built-in_classes"},"string classes"),". The following types of data sources (URLs) are supported: ",(0,o.kt)("strong",{parentName:"p"},"FILE"),", ",(0,o.kt)("strong",{parentName:"p"},"FTP"),", ",(0,o.kt)("strong",{parentName:"p"},"SFTP")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that writes a file, use the ",(0,o.kt)("a",{parentName:"p",href:"/platform/WRITE_operator"},(0,o.kt)("strong",{parentName:"a"},"WRITE")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"loadAndWrite ()  {\n    INPUT f = FILE DO {\n        WRITE f TO 'file:///home/user/loadedfile.csv' APPEND;\n        WRITE CLIENT f TO '/home/user/loadedfile.txt';\n        WRITE CLIENT DIALOG f TO 'loadedfile';\n    }\n}\n")))}c.isMDXComponent=!0}}]);