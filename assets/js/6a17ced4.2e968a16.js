(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{356:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(745)),i={title:"Class extension"},s={unversionedId:"Class_extension",id:"Class_extension",isDocsHomePage:!1,title:"Class extension",description:"The class extension\xa0technique allows the developer to inherit one class from another after its creation. Also, using this mechanism you can add extra\xa0static objects to a class.",source:"@site/docs/Class_extension.md",slug:"/Class_extension",permalink:"/platform/next/Class_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Class_extension.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Extensions",permalink:"/platform/next/Extensions"},next:{title:"Property extension",permalink:"/platform/next/Property_extension"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The class ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Extensions"},"extension"),"\xa0technique allows the developer to ",Object(o.b)("em",{parentName:"p"},"inherit")," one ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Classes"},"class")," from another after its creation. Also, using this mechanism you can add extra\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Static_objects"},"static objects")," to a class."),Object(o.b)("p",null,"Class extension, together with the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_extension"},"property")," and ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_extension"},"action extension")," technique, allows you to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Extract the relations between classes into a separate module, thereby obtaining a more modular architecture."),Object(o.b)("li",{parentName:"ul"},"Modify the functionality of an existing module without making any changes to it."),Object(o.b)("li",{parentName:"ul"},"Declare classes in the ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Metaprogramming"},"metacode")," by defining the inheritance of a class outside its bounds.")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To extend a class, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/EXTEND_CLASS_instruction"},Object(o.b)("strong",{parentName:"a"},"EXTEND CLASS")," instruction"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n    point 'Dot',\n    segment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n    circle 'Circle'\n}\n")))}p.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);