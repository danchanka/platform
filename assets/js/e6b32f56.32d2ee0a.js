(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{676:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(750)),c={title:"Language: Overview",sidebar_label:"Overview"},i={unversionedId:"Language",id:"Language",isDocsHomePage:!1,title:"Language: Overview",description:"lsFusion is a programming language that describes\xa0lsFusion modules.",source:"@site/docs/Language.md",slug:"/Language",permalink:"/platform/docs/next/Language",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Language.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Chat",permalink:"/platform/docs/next/Chat"},next:{title:"Tokens",permalink:"/platform/docs/next/Tokens"}},p=[{value:"Example",id:"example",children:[]}],l={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"lsFusion")," is a programming language that describes\xa0",Object(o.b)("strong",{parentName:"p"},"lsFusion")," ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Modules"},"modules"),"."),Object(o.b)("p",null,"Each module consists of a sequence of\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Instructions"},"instructions")," divided into module ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Module_header"},"header"),"\xa0and ",Object(o.b)("em",{parentName:"p"},"body"),". The header may include four special instructions: ",Object(o.b)("strong",{parentName:"p"},"MODULE"),", ",Object(o.b)("strong",{parentName:"p"},"REQUIRE"),", ",Object(o.b)("strong",{parentName:"p"},"PRIORITY")," and ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE"),", which define module parameters. The header is followed by the module\xa0",Object(o.b)("em",{parentName:"p"},"body")," which consists of the remaining instructions and describes the logic of this module."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// Module header\nMODULE LanguageExample;\n\nREQUIRE System;\n\nNAMESPACE Example;\n\n// Module body\n\n// Classes declaration\nCLASS Employee;\nCLASS Company;\n\n// Properties declaration\nname(employee) = DATA BPSTRING[100](Employee);\nage(employee) = DATA INTEGER(Employee);\ncompany(employee) = DATA Company(Employee);\n\nname(company) = DATA BPSTRING[100](Company);\n\n// Form declaration\nFORM employeeForm\n    OBJECTS e = Employee\n    PROPERTIES(e) name, age, company\n;\n\n// Adding a form to the navigator\nNAVIGATOR {\n    NEW employeeForm;\n}\n")))}s.isMDXComponent=!0},750:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);