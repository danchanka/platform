(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{472:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"Constant"},c={unversionedId:"Constant",id:"version-v4/Constant",isDocsHomePage:!1,title:"Constant",description:"The constant\xa0operator is used to create properties without parameters which always return the same value. This value can be\xa0static objects\xa0of custom\xa0and\xa0built-in\xa0classes as well as the special\xa0NULL value.",source:"@site/versioned_docs/version-v4/Constant.md",slug:"/Constant",permalink:"/platform/Constant",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Constant.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Composition (JOIN)",permalink:"/platform/Composition_JOIN_"},next:{title:"Primitive operations",permalink:"/platform/Primitive_operations"}},s=[{value:"Language",id:"language",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"constant"),"\xa0operator is used to create properties without parameters which always return the same value. This value can be\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static objects"),"\xa0of ",Object(o.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom"),"\xa0and\xa0built-in\xa0classes as well as the special\xa0",Object(o.b)("strong",{parentName:"p"},"NULL")," value.\xa0"),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"Static objects of custom classes are specified as\xa0",Object(o.b)("strong",{parentName:"p"},"<class name",">",".<object name",">"),"."),Object(o.b)("p",null,"Static objects of built-in classes are specified by special ",Object(o.b)("a",{parentName:"p",href:"/platform/Literals"},"literals"),Object(o.b)("em",{parentName:"p"},".\xa0")),Object(o.b)("p",null,"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Direction {\n    north, east, south, west                        // declaring static objects\n}\n\nisNorth (Direction d) = d == Direction.north;  // here a constant property is created from a Direction.north object which is then used by the comparison operator to construct the isNorth property\n\ndefaultDate() = 1982_07_13;                         // here a constant property is created from a literal describing the date\n\nCLASS Man;\nage 'Age' = DATA INTEGER (Man);\nisChild (Man m) = age(m) < 17;                        // here a constant property is used created from an integer (integer literal)\n")))}l.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);