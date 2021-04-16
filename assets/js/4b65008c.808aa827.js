(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(747)),i={title:"Module header"},c={unversionedId:"Module_header",id:"version-v4/Module_header",isDocsHomePage:!1,title:"Module header",description:"Each module begins with a header.",source:"@site/versioned_docs/version-v4/Module_header.md",slug:"/Module_header",permalink:"/platform/Module_header",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Module_header.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Instructions",permalink:"/platform/Instructions"},next:{title:"Instruction =",permalink:"/platform/Instruction_="}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<strong>Examples</strong>",id:"examples",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each ",Object(o.b)("a",{parentName:"p",href:"/platform/Modules"},"module")," begins with a ",Object(o.b)("em",{parentName:"p"},"header.")),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The module header can consist of four special instructions, in the following order:"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"MODULE"),"  instruction defines the module name. It is required. Each module within one ",Object(o.b)("a",{parentName:"p",href:"/platform/Projects"},"project")," must have a unique name."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction defines the list of modules on which the current module ",Object(o.b)("a",{parentName:"p",href:"/platform/Modules#depends"},"depends"),". If the ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction is absent, that is equivalent to depending only on the ",Object(o.b)("strong",{parentName:"p"},"System")," module."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRIORITY")," instruction defines the list of additional ",Object(o.b)("a",{parentName:"p",href:"/platform/Naming#namespace"},"namespaces")," that will have priority in ",Object(o.b)("a",{parentName:"p",href:"/platform/Search"},"finding")," ",Object(o.b)("a",{parentName:"p",href:"/platform/Element_identification"},"system elements"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction defines the module's namespace.  "),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"The name of the module. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". Module names cannot contain an underscore."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"moduleName1, ..., moduleNameN")),Object(o.b)("p",null,"A list of the names of modules that the current module depends on. Each name is a simple ID. "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),Object(o.b)("p",null,"A list of namespace names. Each name is a simple ID. "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName")),Object(o.b)("p",null,"The name of the module namespace. A simple ID that cannot contain an underscore. If the ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction is not used in the header, the name of the current module's namespace will be equal to the name of the module. ** **"),Object(o.b)("h3",{id:"examples"},Object(o.b)("strong",{parentName:"h3"},"Examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE EmployeeExample;     // Defining the module name\n\nREQUIRE System, Utils;      // Listing the modules that the Employee module depends on\nNAMESPACE Employee;         // Setting the namespace\n\nCLASS Employee 'Employee';  // Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);