(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43167],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96079:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"View (VIEW)"},s={unversionedId:"View_VIEW_",id:"version-v4/View_VIEW_",isDocsHomePage:!1,title:"View (VIEW)",description:"The view operator creates a property that returns TRUE if the object collection is visible to the user in the specified object group, and NULL otherwise.",source:"@site/versioned_docs/version-v4/View_VIEW_.md",sourceDirName:".",slug:"/View_VIEW_",permalink:"/platform/View_VIEW_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/View_VIEW_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"View (VIEW)"},sidebar:"version-v4/learn",previous:{title:"Order (ORDER)",permalink:"/platform/Order_ORDER_"},next:{title:"Focus operations",permalink:"/platform/Focus_operations"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The view operator creates a property that returns ",(0,a.kt)("strong",{parentName:"p"},"TRUE")," if the object collection is visible to the user in the specified object group, and ",(0,a.kt)("strong",{parentName:"p"},"NULL")," otherwise."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare a property that determines whether a specified object collection is displayed to the user or not, use the ",(0,a.kt)("a",{parentName:"p",href:"/platform/Object_group_operator"},(0,a.kt)("strong",{parentName:"a"},"VIEW")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n")))}l.isMDXComponent=!0}}]);