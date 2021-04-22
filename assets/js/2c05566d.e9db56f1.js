(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(747)),i={title:"Form extension"},c={unversionedId:"Form_extension",id:"Form_extension",isDocsHomePage:!1,title:"Form extension",description:"The\xa0form extension\xa0technique\xa0allows the developer to extend the structure and design\xa0of a form created in another module.",source:"@site/docs/Form_extension.md",slug:"/Form_extension",permalink:"/platform/next/Form_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Form_extension.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Action extension",permalink:"/platform/next/Action_extension"},next:{title:"Metaprogramming",permalink:"/platform/next/Metaprogramming"}},p=[{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/next/Forms"},"form")," ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Extensions"},"extension"),"\xa0technique\xa0allows the developer to extend the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Form_structure"},"structure")," and ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Interactive_view"},"design"),"\xa0of a form created in another module."),Object(a.b)("p",null,'Form extension allows you to extract a specific functionality into a separate module, which when loaded will cause new components to be "embedded" into existing forms. The disadvantage of this approach is that this module must know the precise structure and design of the form which it depends on, and when these are modified the module may become inoperative.'),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"In order to extend the structure and design of an existing form, the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/next/EXTEND_FORM_instruction"},Object(a.b)("strong",{parentName:"a"},"EXTEND FORM")," instruction")," must be used."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ItemGroup;\nname = DATA ISTRING[100] (ItemGroup);\n\nitemGroup = DATA ItemGroup (Item);\n\nEXTEND FORM items\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\n\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\n    PROPERTIES(g) READONLY name\n    FILTERS itemGroup(i) == g // if the object was added after the object with products, then filtering would go by the group of products, and not by products\n;\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);