(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{491:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(751)),c={title:"Module header"},i={unversionedId:"Module_header",id:"Module_header",isDocsHomePage:!1,title:"Module header",description:"Each module\xa0begins with a header.",source:"@site/docs/Module_header.md",slug:"/Module_header",permalink:"/platform/docs/next/Module_header",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Module_header.md",version:"current",sidebar:"docs",previous:{title:"Instructions: Overview",permalink:"/platform/docs/next/Instructions"},next:{title:"Instruction =: Overview",permalink:"/platform/docs/next/Instruction_="}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<strong>Examples</strong>",id:"examples",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Modules"},"module"),"\xa0begins with a ",Object(o.b)("em",{parentName:"p"},"header.")),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The module header can consist of four special instructions, in the following order:"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"MODULE"),"\xa0 instruction defines the module name. It is required. Each module within one ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Projects"},"project")," must have a unique name."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction defines the list of modules on which the current module ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Modules#depends"},"depends"),". If the ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction is absent, that is equivalent to depending only on the\xa0",Object(o.b)("strong",{parentName:"p"},"System")," module."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRIORITY")," instruction defines the list of additional\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Naming#namespace"},"namespaces")," that will have priority\xa0in ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Search"},"finding")," ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Element_identification"},"system elements"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction defines the module's namespace. \xa0"),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"The name of the module. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#id-broken"},"Simple ID"),". Module names cannot contain an underscore."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"moduleName1, ..., moduleNameN")),Object(o.b)("p",null,"A list of the names of modules that the current module depends on. Each name is a simple ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),Object(o.b)("p",null,"A list of namespace names. Each name is a simple ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName")),Object(o.b)("p",null,"The name of the module namespace. A simple ID that cannot contain an underscore. If the ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction is not used in the header, the name of the current module's namespace will be equal to the name of the module.\xa0**\xa0**"),Object(o.b)("h3",{id:"examples"},Object(o.b)("strong",{parentName:"h3"},"Examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE EmployeeExample;     // Defining the module name\n\nREQUIRE System, Utils;      // Listing the modules that the Employee module depends on\nNAMESPACE Employee;         // Setting the namespace\n\nCLASS Employee 'Employee';  // Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n")))}s.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);