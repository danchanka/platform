(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{688:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var o=r(3),n=r(7),a=(r(0),r(745)),p={title:"Object group operator"},c={unversionedId:"Object_group_operator",id:"Object_group_operator",isDocsHomePage:!1,title:"Object group operator",description:"Object group operators are used for creating properties working with the current state of the object group on the form.",source:"@site/docs/Object_group_operator.md",slug:"/Object_group_operator",permalink:"/platform/next/Object_group_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Object_group_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"UNGROUP operator",permalink:"/platform/next/UNGROUP_operator"},next:{title:"Type conversion operator",permalink:"/platform/next/Type_conversion_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/next/Form_structure"},"Object group")," operators are used for creating ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," working with the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Object_group_operations"},"current state")," of the object group on the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Forms"},"form"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"FILTER groupObjectId\nVIEW groupObjectId\nORDER groupObjectId\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"Object group operators create properties that accept the same number of parameters as the number of objects in the object group. These operators cannot be used inside ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expressions"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"FILTER")," operator creates a property which value is\xa0",Object(a.b)("strong",{parentName:"p"},"TRUE")," when the object collection passed as parameters meets all the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Form_structure#filters"},"filtering")," conditions on the form, otherwise the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"VIEW"),"\xa0operator creates a property which value is ",Object(a.b)("strong",{parentName:"p"},"TRUE")," if the object collection passed as parameters is currently displayed on the form, otherwise, the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"ORDER")," operator creates a property which value determines the relative order of the object collection on the form passed as a parameter. The value of this property is usually used in ",Object(a.b)("strong",{parentName:"p"},"ORDER")," blocks of the other properties, for example, ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/next/PARTITION_operator"},"PARTITION")),", ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/next/FOR_operator"},"FOR")),", etc."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupObjectId")),Object(a.b)("p",null,"Global ",Object(a.b)("a",{parentName:"p",href:"/platform/next/IDs#groupobjectid-broken"},"object group ID"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n")))}b.isMDXComponent=!0},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),b=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=b(r),m=o,O=l["".concat(p,".").concat(m)]||l[m]||u[m]||a;return r?n.a.createElement(O,c(c({ref:t},i),{},{components:r})):n.a.createElement(O,c({ref:t},i))}));function O(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);