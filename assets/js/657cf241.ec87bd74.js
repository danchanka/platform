(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"Composition (JOIN)"},p={unversionedId:"Composition_JOIN_",id:"Composition_JOIN_",isDocsHomePage:!1,title:"Composition (JOIN)",description:"The composition operator allows you to use values of other properties as arguments for one (main)\xa0property.",source:"@site/docs/Composition_JOIN_.md",slug:"/Composition_JOIN_",permalink:"/platform/next/Composition_JOIN_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Composition_JOIN_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Data properties (DATA)",permalink:"/platform/next/Data_properties_DATA_"},next:{title:"Constant",permalink:"/platform/next/Constant"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The composition operator allows you to use values of other properties as ",Object(o.b)("em",{parentName:"p"},"arguments")," for one (",Object(o.b)("em",{parentName:"p"},"main"),")\xa0property."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To implement composition, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/JOIN_operator"},Object(o.b)("strong",{parentName:"a"},"JOIN")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"f = DATA INTEGER (INTEGER, INTEGER, INTEGER);\ng = DATA INTEGER (INTEGER, INTEGER);\nh = DATA INTEGER (INTEGER, INTEGER);\nc(a, b) = f(g(a, b), h(b, 3), a);\n\ncount = DATA BPSTRING[255] (INTEGER);\nname = DATA BPSTRING[255] (INTEGER);\nformatted(INTEGER a, INTEGER b) = [FORMULA BPSTRING[255] ' CAST($1 AS TEXT) || \\' / \\' || CAST($2 AS TEXT)'](count(a), name(b));\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Triangle;\ncathetus1 = DATA DOUBLE(Triangle);\ncathetus2 = DATA DOUBLE(Triangle);\n\nhypotenuseSq(triangle) = cathetus1(triangle)*cathetus1(triangle) + cathetus2(triangle)*cathetus2(triangle);\n\nhypotenuseSq2(triangle) = [ x*x + y*y](cathetus1(triangle), cathetus2(triangle)); // a similar property set using composition\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?a.a.createElement(b,p(p({ref:t},l),{},{components:n})):a.a.createElement(b,p({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);